import { Link } from "react-router-dom";
import { Botao, Descricao, Imagemrestaurante, Nota, Paragrafo, Restaurante } from "./style";




export type Props = {
    id?: number;
    size?: 'small' | 'big';
    children?: React.ReactNode;
    descricao?: string;
    nota?:number;
    nome?:string;
    image?:string;
    categoria?:string[]
    Tolink?:string;
    onClick?: () => void;
};



export const Fragmento = ({ size = 'small', children, onClick }: Props) => (
    <Paragrafo onClick={onClick} size={size}>{children}</Paragrafo>
);



const Restaurantes = ({nome,nota,descricao,image,id}:Props) => (
    <Restaurante>
        <Imagemrestaurante image={image}>
            <div className="botoes_imagem_restaurante">
                
            </div>
        </Imagemrestaurante>
        <Descricao>
            <div className="restaurante_nota">
                <Fragmento size="big">{nome} </Fragmento>
                <Nota><Fragmento size="big">{nota}</Fragmento><img src='/estrela.png' alt="" /></Nota>
            </div>
            <Fragmento>
                <p>
                    {descricao}
                </p>
            </Fragmento>
            <Link style={{
        textDecoration: 'none'
    }} to={`/perfil/${id}`}>
                <Botao>Saiba mais
                </Botao> 
            </Link>
        </Descricao>
    </Restaurante>
);

export default Restaurantes;
