import styled from "styled-components";

export const ClientWrapper = styled.div`
   display: flex;
   margin: 0 15px;
   align-items: center;
   flex-direction: column;
   flex-basis: 25%;
   line-height: 1.8em;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.neutral.veryDarkDesaturatedBlue};
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
`;
export const ClientName = styled.div`
   font-family: ${({ theme }) => theme.font.family.fraunces.rules};
   font-weight: 800;
`;
export const ClientProfession = styled.div`
   font-size: 14px;
   opacity: 0.4;
`;
