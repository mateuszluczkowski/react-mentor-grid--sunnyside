import styled from "styled-components";

export const TileWrapper = styled.div`
   grid-area: ${({ gridArea }) => gridArea};
   color: ${({ theme }) => theme.colors.neutral.veryDarkDesaturatedBlue};
   display: flex;
   position: relative;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: ${({ theme }) => theme.colors.neutral.white};
   z-index: 1;
   &:nth-last-of-type(1) {
      color: ${({ theme }) => theme.colors.primary.DarkBlue};
   }
   &:nth-last-of-type(2) {
      color: ${({ theme }) => theme.colors.primary.DarkDesaturatedCyan};
   }
   &:nth-last-of-type(1),
   &:nth-last-of-type(2) {
      justify-content: flex-end;
      padding-bottom: 30px;
      @media (max-width: 980px) {
         padding-bottom: 0;
      }
   }
   @media (max-width: 980px) {
      max-width: 100vw;
   }
`;
export const ContentWrapper = styled.div`
   width: ${({ button }) => (button ? "64%" : "50%")};
   text-align: ${({ button }) => (button ? "left" : "center")};
   z-index: 3;
   position: absolute;
   @media (max-width: 980px) {
      width: 85%;
   }
`;

export const TileBackground = styled.img.attrs(({ background }) => ({
   src: background,
}))`
   z-index: 2;
   position: relative;
   top: 0;
   left: 0;
   width: 100%;
`;
export const WhiteBackground = styled.div`
   height: 600px;
   width: 100%;
   @media (max-width: 980px) {
      height: 420px;
   }
`;
export const Button = styled.button`
   position: relative;
   color: ${({ theme }) => theme.colors.neutral.veryDarkDesaturatedBlue};
   background: transparent;
   border: 0;
   margin: 25px 0;
   font-family: ${({ theme }) => theme.font.family.fraunces.rules};
   font-weight: 900;
   text-transform: uppercase;
   font-size: 16px;
   letter-spacing: 1px;
   z-index: 1;
   cursor: pointer;
   &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      border-radius: 5px 5px;
      left: 50%;
      transform: translateX(-50%);
      height: 9px;
      width: 110%;
      opacity: 0.25;
      z-index: -1;
      background-color: ${({ theme, id }) =>
         id === 1 ? theme.colors.primary.Yellow : theme.colors.primary.SoftRed};
   }
   @media (max-width: 980px) {
      margin-bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
   }
`;
export const Text = styled.div`
   margin: 25px 0;
   font-weight: 600;
   line-height: 1.5em;
   //if button false it's the last two tiles
   ${({ button }) =>
      button
         ? "opacity: 0.6; font-size: 18px; text-align: left;"
         : "opacity: 0.8; font-size: 17px; text-align: center;"}

   @media (max-width: 980px) {
      text-align: center;
      ${({ button }) => {
         if (!button) return "margin-bottom: 70px;";
      }}
`;

export const Title = styled.div`
   margin: 25px 0;
   font-family: ${({ theme }) => theme.font.family.fraunces.rules};
   font-size: ${({ button }) => (button ? "40px" : "30px")};
   font-weight: 900;
   line-height: 1.4em;
   @media (max-width: 980px) {
      text-align: center;
      font-size: ${({ button }) => (button ? "33px" : "28px")};
   }
`;
