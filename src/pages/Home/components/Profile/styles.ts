import { styled } from "styled-components";


export const ProfileContainer = styled.div`
  
  height: 13.25rem;
  width: 100%;
  max-width: 54rem;
  margin: auto;
  background: ${({theme}) => theme["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 6px;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarContainer = styled.img`
  
 
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;

`;


export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ProfileTitleContainer = styled.div`
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

export const ProfileCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  padding: 0.5rem 0px;
  
  > p {
    font-size: 1em;
  }
`;

export const ProfileIconsContainer = styled.div`

  padding-top:  1.938rem;

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


