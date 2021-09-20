import styled from "styled-components";

export const NavWrapper = styled.ul`
   display: flex;
   z-index: 1;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   align-items: center;
   justify-content: "flex"-end;
   padding: 35px 20px;
   list-style: none;
   color: ${({ theme }) => theme.colors.neutral.white};
   @media (max-width: 980px) {
      padding: 30px 25px;
   }
`;
export const HamburgerIcon = styled.li`
   display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
   cursor: pointer;
`;
export const Icon = styled.img.attrs(({ icon }) => ({
   src: icon,
}))``;
export const LogoWrapper = styled.div`
   flex-grow: 1;
   z-index: 0;
`;

export const Logo = styled.img.attrs(({ path }) => ({
   src: path,
}))`
   height: 33px;
   margin-left: 20px;
   @media (max-width: 980px) {
      height: 25px;
      margin-left: 0px;
   }
`;

export const Link = styled.li`
   display: ${({ isMobile }) => (isMobile ? "none" : "block")};
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
      background: white;
      color: black;
      padding: 20px 30px;
      border-radius: 50px 50px;
      z-index: 1;
   }
`;
