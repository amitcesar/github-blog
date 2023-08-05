import { styled } from "styled-components";


export const ProfileContainer = styled.div`
  
  height: 13.25rem;
  width: 54rem;
  margin: auto;
 
  background: ${({theme}) => theme["base-profile"]};

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2.5rem;
 

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 6px;
  }
  
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ProfileTitleAndLink = styled.div`
  display: flex;
  justify-content: space-between;

  > h2 {
    color: ${({theme})=> theme["base-title"]};
    
  }
  
  span > a {
    color: ${({theme}) => theme.blue};
   
  }

  svg {
    padding-left: 0.524rem;
  }



 
`;

