import { Button, CartContainer, CartItem, Overlay, Sidebar, Valores } from "./style"

import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close,remove } from '../../store/reducers/cart'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
    const dispatch = useDispatch();

    const closeCart = () => {
        dispatch(close());
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, item) => {
            return (
                acumulador + 
                (item.cardapio ? item.cardapio.reduce((subtotal, produto) => subtotal + produto.preco, 0) : 0)
            );
        }, 0).toFixed(2);
    }

    const removeItem = (id:number) => {
        dispatch(remove(id))
    }
    
    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        item.cardapio?.map((produto) => (
                            <CartItem key={produto.id}>
                                <img src={produto.foto } alt={produto.nome} />
                                <div>
                                    <h3>{produto.nome}</h3>
                                    <span>R$ {produto.preco}</span>
                                </div>
                                <button onClick={()=> removeItem(item.id)} type="button"></button>
                            </CartItem>
                        ))
                    ))}
                </ul>
                <Valores>
                    <p>Valor total</p>
                    <p>R$ {getTotalPrice()}</p> 
                </Valores>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart;
