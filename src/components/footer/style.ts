import styled from 'styled-components';
import { Cores } from '../../style';

export const Rodape = styled.footer`
    height: 298px;
    background-color: ${Cores.CremePessego}; 
    display :flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    
    img{
        width:125px;
        height:57.5px;
        margin-bottom:40px;
    }

    p{
       color:${Cores.VermelhoCoral}
       text-align:center; 
    }
`;
// por algum motivo quando eu coloco alguma outra tag alem no color na tag p , para de funcinonar qualquer outro css

export const Rodapelinks = styled.ul`
    display:flex;
    justify-content: center;
    list-style:none;
    li{
        padding:4px;
        
        img{
            height:24px;
            width:24px;
        }
    }
     
`

   
