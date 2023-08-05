import { styled } from "styled-components";
import headerBackground from "../../assets/headerBg.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBackground}) no-repeat center;
  background-size: cover;
 // border: 1px solid red;
  background-color: ${({theme}) => theme["base-profile"]};

  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    margin-bottom: 5rem;
  }


`;
