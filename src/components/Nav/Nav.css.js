import styled from "styled-components";

export const NavWrapper = styled.ul`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   padding: 35px 20px;
   list-style: none;
   color: ${({ theme }) => theme.colors.neutral.white};
`;
export const LogoWrapper = styled.div`
   flex-grow: 1;
   z-index: 0;
`;

export const Logo = styled.img.attrs(({ path }) => ({
   src: path,
}))`
   height: 33px;
   margin-left: 20px;
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
      background: white;
      color: black;
      padding: 20px 30px;
      border-radius: 50px 50px;
   }
`;
