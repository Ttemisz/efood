import styled from "styled-components";
import { Cores } from "../../style";

export const HeaderBar = styled.header`
  background-color: ${Cores.CremePessego};
  display: flex;
  height: 384px;
  align-items:center;
  flex-direction: column;
  justify-content: space-between;

`

export const Title = styled.h1`
  font-size: 36px;
  text-align:center;
  padding-bottom:64px;
  color:${Cores.VermelhoCoral};
  font-weight: 900;
`