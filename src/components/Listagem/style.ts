import styled from "styled-components";
import { Cores } from "../../style";
import { Props } from ".";


export const Restaurante = styled.div`
    border: 1px solid ${Cores.VermelhoCoral}; 
    height: 398px;
    width: 472px;
`;

export const Botao = styled.button<Props>`
    background-color: ${Cores.VermelhoCoral};
    color: ${Cores.CremePessego};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
    font-weight: 700;
    border:none;
    margin:5px;
    
`;

export const Imagemrestaurante = styled.div`
    
    height: 217px;
    width: 472px;
    background-image:url('public/sushi.png');
    background-size: cover;
    
    .botoes_imagem_restaurante{
        padding:16px;
        display:flex;
        justify-content:flex-end;
    }
`;

export const Descricao = styled.p`
    background-color: ${Cores.Branco};

    .restaurante_nota{
        display:flex;
        justify-content:space-between;
        margin:8px;
        
        
        
    }
`;

export const Paragrafo = styled.p<Props>`
    color: ${Cores.VermelhoCoral};
    font-size: ${(props) => (props.size === 'big' ? '18px' : '14px')};
    font-weight: ${(props) => (props.size === 'big' ? '700' : '400')};
   
    p{
        margin-top:16px;
        margin-left:8px;
        margin-right:8px;
        margin-bottom:20px;
        
    }

`;


export const Nota = styled.p`

    display:flex;
    gap:8px;
    img {
        height: 20px;
        width: 21px;
    }
`;