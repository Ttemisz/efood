
import ItemProduto from "../ItemProduto";
import { Container } from "../../style"
import {  Itens } from "./style"
import Restaurante from "../../models/Restaurante";

type Props = {
    cardapio: Restaurante[]; 
};

const Produtos = ({ cardapio }: Props) => (
    <Container>
        <Itens>
            {cardapio.map((restaurante) =>
                restaurante.cardapio.map((produto) => (
                    <ItemProduto
                        key={produto.id}
                        id={produto.id}
                        imagem={produto.foto}
                        nome={produto.nome}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        porcao={produto.porcao}
                    />
                ))
            )}
        </Itens>
    </Container>
);

export default Produtos