import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { Button, CartContainer, CepNumero, InputGroup, NumeroCVV, Overlay, Sidebar } from "./style";
import { closePagamento, openEntrega, openProcessadoPedido, setOrderId } from '../../store/reducers/cart';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { usePurchaseMutation } from "../../services/api";




const Pagamento = () => {
    const { isPagamentoOpen, items, delivery ,orderId} = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();
    const [purchase] = usePurchaseMutation()
    const fecharPagamento = () => {
        dispatch(closePagamento());
    }

    const voltarEntrega = () => {
        dispatch(closePagamento());
        dispatch(openEntrega());
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, item) => {
            return (
                acumulador + 
                (item.cardapio ? item.cardapio.reduce((subtotal, produto) => subtotal + produto.preco, 0) : 0)
            );
        }, 0).toFixed(2);
    }

    const paraAConfirmacao = () => {
        dispatch(closePagamento());
        dispatch(openProcessadoPedido());
    }

    const form = useFormik({
        initialValues: {
            nomeCartao: '',
            numeroCartao: '',
            cvv: '',
            mesVencimento: '',
            anoVencimento: '',
        },
        validationSchema: Yup.object({
            nomeCartao: Yup.string().required('Campo obrigatório'),
            numeroCartao: Yup.string().length(16, 'O número do cartão deve ter 16 dígitos').required('Campo obrigatório'),
            cvv: Yup.string().length(3, 'O CVV deve ter 3 dígitos').required('Campo obrigatório'),
            mesVencimento: Yup.string().length(2, 'O mês deve ter 2 dígitos').required('Campo obrigatório'),
            anoVencimento: Yup.string().length(4, 'O ano deve ter 4 dígitos').required('Campo obrigatório'),
        }),
        onSubmit: async (values) => { 
                const response = await purchase({
                    products: items.flatMap(item => 
                        item.cardapio.map(produto => ({
                            id: produto.id,
                            price: produto.preco 
                        }))
                    ),
                    delivery: {
                        receiver: delivery?.receiver || "string", 
                        address: {
                            description: delivery?.address?.description || "string", 
                            city: delivery?.address?.city || "string", 
                            zipCode: delivery?.address?.zipCode || "string", 
                            number: delivery?.address?.number || 0, 
                            complement: delivery?.address?.complement || "string" 
                        }
                    },
                    payment: {
                        card: {
                            name: values.nomeCartao, 
                            number: values.numeroCartao,
                            code: parseInt(values.cvv),
                            expires: {
                                month: parseInt(values.mesVencimento),
                                year: parseInt(values.anoVencimento)
                            }
                        }
                    }
                }).unwrap(); 
                
                console.log('ID do pedido:', response.orderId)
                dispatch(setOrderId(response.orderId))
                console.log(setOrderId)
                console.log('Estado do Redux:', orderId) 
                paraAConfirmacao(); 
                dispatch(closePagamento());

        }
    });

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched;
        const isInvalid = fieldName in form.errors;

        if (isTouched && isInvalid) return message;

        return '';
    }

    return (
        <>
            <CartContainer className={isPagamentoOpen ? 'is-open-pagamento' : ''}>
                <Overlay onClick={fecharPagamento} />
                <Sidebar>
                    <h3>Pagamento - Valor a pagar R$ {getTotalPrice()}</h3>
                    <form onSubmit={form.handleSubmit}>
                        <InputGroup>
                            <label htmlFor="nomeCartao">Nome do cartão</label>
                            <input
                                id="nomeCartao"
                                name="nomeCartao"
                                type="text"
                                onChange={form.handleChange}
                                value={form.values.nomeCartao}
                                onBlur={form.handleBlur}
                            />
                            <small style={{ color: "red", fontWeight: "bold" }}>{getErrorMessage('nomeCartao', form.errors.nomeCartao)}</small>
                        </InputGroup>
                        <NumeroCVV>
                            <InputGroup style={{ width: '228px' }}>
                                <label htmlFor="numeroCartao">Número do cartão</label>
                                <input
                                    id="numeroCartao"
                                    name="numeroCartao"
                                    type="text"
                                    onChange={form.handleChange}
                                    value={form.values.numeroCartao}
                                    onBlur={form.handleBlur}
                                />
                                <small style={{ color: "red", fontWeight: "bold" }}>{getErrorMessage('numeroCartao', form.errors.numeroCartao)}</small>
                            </InputGroup>
                            <InputGroup style={{ width: '87px' }}>
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    id="cvv"
                                    name="cvv"
                                    type="text"
                                    onChange={form.handleChange}
                                    value={form.values.cvv}
                                    onBlur={form.handleBlur}
                                />
                                <small style={{ color: "red", fontWeight: "bold" }}>{getErrorMessage('cvv', form.errors.cvv)}</small>
                            </InputGroup>
                        </NumeroCVV>
                        <CepNumero>
                            <InputGroup>
                                <label htmlFor="mesVencimento">Mês de vencimento</label>
                                <input
                                    id="mesVencimento"
                                    name="mesVencimento"
                                    type="text"
                                    onChange={form.handleChange}
                                    value={form.values.mesVencimento}
                                    onBlur={form.handleBlur}
                                />
                                <small style={{ color: "red", fontWeight: "bold" }}>{getErrorMessage('mesVencimento', form.errors.mesVencimento)}</small>
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="anoVencimento">Ano de vencimento</label>
                                <input
                                    id="anoVencimento"
                                    name="anoVencimento"
                                    type="text"
                                    onChange={form.handleChange}
                                    value={form.values.anoVencimento}
                                    onBlur={form.handleBlur}
                                />
                                <small style={{ color: "red", fontWeight: "bold" }}>{getErrorMessage('anoVencimento', form.errors.anoVencimento)}</small>
                            </InputGroup>
                        </CepNumero>
                        <Button type="submit">Finalizar Pagamento</Button>
                    </form>
                    <Button onClick={voltarEntrega}>Voltar para a edição de endereço</Button>
                </Sidebar>
            </CartContainer>
        </>
    );
}

export default Pagamento;
