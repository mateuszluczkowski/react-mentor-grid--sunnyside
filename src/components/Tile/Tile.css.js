import styled from "styled-components";

export const TileWrapper = styled.div`
   color: ${({ theme }) => theme.colors.neutral.veryDarkDesaturatedBlue};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: ${({ background, theme }) =>
      background ? `url(${background})` : theme.colors.neutral.white};
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
   }
`;
export const ContentWrapper = styled.div`
   width: ${({ button }) => (button ? "64%" : "50%")};
   text-align: ${({ button }) => (button ? "left" : "center")};
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
`;
export const Text = styled.div`
   margin: 25px 0;
   font-weight: 600;
   line-height: 1.5em;
   opacity: ${({ button }) => (button ? "0.6" : "0.8")};
   font-size: ${({ button }) => (button ? "18px" : "17px")};
   text-align: ${({ button }) => (button ? "left" : "center")};
`;
export const Title = styled.div`
   margin: 25px 0;
   font-family: ${({ theme }) => theme.font.family.fraunces.rules};
   font-size: ${({ button }) => (button ? "40px" : "30px")};
   font-weight: 900;
   line-height: 1.4em;
`;
