import styled from "styled-components";

export const HamburgerIcon = styled.img.attrs(({ icon }) => ({
   src: icon,
}))`
   position: absolute;
   top: 30px;
   right: 25px;
   z-index: 10;
`;

export const Logo = styled.img.attrs(({ path }) => ({
   src: path,
}))`
   position: absolute;
   top: 30px;
   left 25px;
   z-index: 6;
   height: 33px;
   margin-left: 20px;
   @media (max-width: 980px) {
      height: 25px;
      margin-left: 0px;
   }
`;
export const NavList = styled.ul`
   display: flex;
   z-index: 1;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   align-items: center;
   justify-content: flex-end;
   padding: 35px 20px;
   list-style: none;
   transition: 0.4s;
   color: ${({ theme }) => theme.colors.neutral.white};
   @media (max-width: 980px) {
      ${({ isDisplayed }) =>
         isDisplayed
            ? "opacity:1; pointer-events:auto;"
            : "opacity:0; pointer-events:none;"}

      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      padding: 30px 25px;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.neutral.white};
      width: 85%;
      color: ${({ theme }) => theme.colors.neutral.veryDarkDesaturatedBlue};
   }
`;
export const Triangle = styled.div`
   position: absolute;
   top: -30px;
   right: 0;
   height: 30px;
   width: 30px;
   overflow: hidden;

   &::before {
      content: "";
      position: absolute;
      top: 29%;
      left: 29%;
      transform: rotate(45deg);
      height: 56px;
      width: 56px;
      background: ${({ theme }) => theme.colors.neutral.white};
   }
`;

export const Link = styled.li`
   margin: 0 25px;
   cursor: pointer;
   font-weight: 600;
   font-size: 19px;
   opacity: 0.8;
   &:nth-last-of-type(1) {
      font-size: 16px;
      opacity: 1;
      font-family: ${({ theme }) => theme.font.family.fraunces.rules};
      font-weight: 700;
      text-transform: uppercase;
      background: ${({ theme }) => theme.colors.neutral.white};
      color: black;
      padding: 20px 30px;
      border-radius: 50px 50px;
      z-index: 1;
      @media (max-width: 980px) {
         background: ${({ theme }) => theme.colors.primary.Yellow};
      }
   }
   @media (max-width: 980px) {
      margin: 20px;
      opacity: 0.5;
   }
`;
