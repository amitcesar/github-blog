import { styled } from "styled-components";

export const InfoContainer = styled.div`
  height: 10.5rem;
  width: 100%;
  max-width: 54rem;
  margin: auto;
  background: ${({theme}) => theme["base-profile"]};

  border-radius: 6px;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  
  

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
   
    > button, span {
      font-size: 12px;
      color: ${({theme}) => theme.blue};
   
      svg {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
    }
  
  }

`;

export const BackButton = styled.button`
  border: none;
  background: ${({theme}) => theme["base-profile"]};
  max-height: 1.188rem;


`;


export const InfoCardContent = styled.div`
 
  padding: 0.5rem 2rem;
  gap: 0.5rem;
  
`;

export const InfoIconsContainer = styled.div`
  padding-top: 0.5rem;

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    
  }
 
  li {
     display: flex;
      align-items: center;
      gap: 0.5rem;
  }

`;