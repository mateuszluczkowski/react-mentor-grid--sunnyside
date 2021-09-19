import styled from "styled-components";

export const ClientWrapper = styled.div`
   grid-area: client;
   display: flex;
   height: 750px;
   flex-wrap: no-wrap;
   justify-content: center;
   align-items: center;
`;
export const Content = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
`;
export const Title = styled.div`
   flex-basis: 100%;
   justify-content: center;
   text-align: center;
   font-family: ${({ theme }) => theme.font.family.fraunces.rules};
   font-size: 23px;
   font-weight: 800;
   text-transform: uppercase;
   letter-spacing: 4px;
   margin-bottom: 50px;
   opacity: 0.4;
`;
