import { styled } from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
 // border: 1px solid red;
  background-color: ${({theme}) => theme["base-profile"]};
  display: flex;
  justify-content: center;
  align-items: center;


`;
