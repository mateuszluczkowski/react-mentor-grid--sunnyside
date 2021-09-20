import styled from "styled-components";

export const ClientWrapper = styled.div`
   display: flex;
   grid-area: client;
   background-color: ${({ theme }) => theme.colors.neutral.white};
   height: 750px;
   flex-wrap: no-wrap;
   justify-content: center;
   align-items: center;
   @media (max-width: 980px) {
      height: unset;
      flex-direction: column;
      padding-bottom: 75px;
   }
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
   @media (max-width: 980px) {
      margin-top: 75px;
      margin-bottom: 20px;
      font-size: 16px;
   }
`;
