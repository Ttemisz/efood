import { Botao, Descricao, Imagemrestaurante, Nota, Paragrafo, Restaurante } from "./style";




export type Props = {
    size?: 'small' | 'big';
    children?: React.ReactNode; 
};

const Fragmento = ({ size = 'small', children }: Props) => (
    <Paragrafo size={size}>{children}</Paragrafo> 
);

const Listagem = () => (
    <Restaurante>
    <Imagemrestaurante >
        <div className="botoes_imagem_restaurante">
            <Botao>Destaque da semana</Botao> 
            <Botao>Japonesa</Botao>
        </div>
    </Imagemrestaurante>
    <Descricao>
        <div className="restaurante_nota">
            <Fragmento size="big">Hioki Sushi </Fragmento>
            <Nota><Fragmento size="big">4.9</Fragmento><img src="public\estrela.png" alt="" /></Nota>
        </div>
        <Fragmento>
            <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
            sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e 
            qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
            </p>
        </Fragmento>
       <Botao>Saiba mais</Botao> 
    </Descricao>
    </Restaurante>
);

export default Listagem;
