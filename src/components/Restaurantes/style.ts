import styled from "styled-components";
import { Cores } from "../../style";
import { Props } from ".";

export const Restaurante = styled.div`
    background-color: ${Cores.Branco};
    border: 1px solid ${Cores.VermelhoCoral}; 
    height: 398px;
    width: 472px;
    margin-bottom:56px;
`;

export const Botao = styled.button<Props>`
    background-color: ${Cores.VermelhoCoral};
    color: ${Cores.CremePessego};
    padding: 8px 6px;
    font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
    font-weight: 700;
    border: none;
    margin: 5px;
`;

export const Imagemrestaurante = styled.div<Props>`
    height: 217px;
    width: 472px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center; 

    .botoes_imagem_restaurante {
        padding: 16px;
        display: flex;
        justify-content: flex-end;
    }
`;

export const Descricao = styled.div`  
    .restaurante_nota {
        display: flex;
        justify-content: space-between;
        margin: 8px;
    }
`;

export const Paragrafo = styled.p<Props>`
    color: ${Cores.VermelhoCoral};
    font-size: ${(props) => (props.size === 'big' ? '18px' : '14px')};
    font-weight: ${(props) => (props.size === 'big' ? '700' : '400')};
    
    p {
        margin: 16px 8px 20px 8px;
    }
`;

export const Nota = styled.p`
    display: flex;
    align-items: center; 
    gap: 8px;
    img {
        height: 20px;
        width: 21px;
    }
`;