import { styled } from "styled-components";


export const PublicationsContainer = styled.section`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;


  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  margin-top: 3rem;
  margin-bottom: 14.875rem;
  
 

`;

export const PostCard = styled.div`
  width: 100%;
  max-width: 26rem;

  height: 16.25rem;
  border-radius: 10px;
  background: ${({theme}) => theme["base-post"]};
  border: 2px solid ${({theme}) => theme["base-post"]};
  
  &:hover {
    border-color: ${({ theme }) => theme["base-label"]};
  }
  
`;

export const PostTitle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  

  > h3 {
    color: ${({theme}) => theme["base-title"]};
    font-size:  1.25em;
  }
  
  >  span {
    width: 30%;
    font-size: 0.875em;
    text-align: center;
    padding-bottom: 1.5rem;
  }
  
`;

export const PostDescription = styled.div`
  padding: 1rem;

  > p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
     overflow: hidden;
    -webkit-box-orient: vertical; 
  }
`;