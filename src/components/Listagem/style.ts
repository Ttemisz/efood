import styled from "styled-components";
import { Cores } from "../../style";
import { Props } from ".";


export const Restaurante = styled.div`
    border: 1px solid ${Cores.VermelhoCoral}; 
    height: 394px;
    width: 472px;
`;

export const Botao = styled.div<Props>`
    background-color: ${Cores.VermelhoCoral};
    color: ${Cores.CremePessego};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
    font-weight: 700;
`;

export const Imagemrestaurante = styled.div`
    height: 217px;
    width: 472px;
    background-image:url('public/sushi.png');
     background-size: cover;
`;

export const Descricao = styled.p`
    background-color: ${Cores.Branco};
`;

export const Paragrafo = styled.p<Props>`
    color: ${Cores.VermelhoCoral};
    font-size: ${(props) => (props.size === 'big' ? '18px' : '14px')};
    font-weight: ${(props) => (props.size === 'big' ? '700' : '400')};
`;


export const Nota = styled.p`

    display:flex;
    img {
        height: 20px;
        width: 21px;
    }
`;