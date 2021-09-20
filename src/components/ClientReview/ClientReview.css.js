import styled from "styled-components";

export const ClientWrapper = styled.div`
   display: flex;
   margin: 0 15px;
   align-items: center;
   flex-direction: column;
   flex-basis: 25%;
   order: ${({ id }) => id};
   line-height: 1.8em;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.neutral.veryDarkDesaturatedBlue};
   @media (max-width: 980px) {
      flex-basis: 85%;
      margin-bottom: 25px;
      order: ${({ id }) => {
         if (id === 3) return 2;
         if (id === 2) return 3;
         return id;
      }};
   }
`;
export const Portrait = styled.img.attrs(({ picture }) => ({
   src: picture,
}))`
   border-radius: 50%;
   width: 70px;
   margin: 50px;
`;
export const Review = styled.p`
   text-align: center;
   margin-bottom: 50px;
   opacity: 0.8;
   @media (max-width: 980px) {
      margin-bottom: 20px;
   }
`;
export const ClientName = styled.div`
   font-family: ${({ theme }) => theme.font.family.fraunces.rules};
   font-weight: 800;
`;
export const ClientProfession = styled.div`
   font-size: 14px;
   opacity: 0.4;
`;
