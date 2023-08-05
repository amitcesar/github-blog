import { styled } from "styled-components";


export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 54rem;

  margin: auto;
  margin-top: 4.5rem;
  
  input {
    border-radius: 6px;
    border: 0;
    border: 1px solid ${({theme}) => theme["base-border"]};
    width: 100%;
    height: 3.125rem;
    max-width: 54rem;
    
    background: ${({theme}) => theme["base-input"]};

    &::placeholder {
      color: ${({theme}) => theme["base-label"]};
      padding-left: 0.5rem;
      padding: 0.625rem 0.75rem;
    }
  }

`;

export const InputFormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 0.938rem;
  

   > h3 {
    color: ${({theme}) => theme["base-subtitle"]};
    font-size: 1.125em;
  }
  > span {
    color: ${({theme}) => theme["base-span"]};
    font-size: 0.875em;
  }
`;

