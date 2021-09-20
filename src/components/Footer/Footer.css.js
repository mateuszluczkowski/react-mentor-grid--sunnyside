import styled from "styled-components";

export const FooterWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   grid-area: footer;
   height: 350px;
   background-color: ${({ theme }) => theme.colors.primary.LightModerateCyan};
   color: ${({ theme }) => theme.colors.primary.DarkModerateCyan};
   font-weight: 600;
`;
export const Content = styled.div`
   display: flex;
   height: 80%;
   flex-direction: column;
   justify-content: center;
   //    align-items: center;
`;
export const LogoWrapper = styled.div`
   text-align: center;
`;
export const Logo = styled.img.attrs(({ logo }) => ({
   src: logo,
}))`
   height: 33px;
   filter: invert(46%) sepia(59%) saturate(304%) hue-rotate(118deg)
      brightness(65%) contrast(90%);
   margin-bottom: 15px;
`;
export const Menu = styled.ul`
   display: flex;
   list-style: none;
   margin-bottom: 60px;
`;
export const MenuItem = styled.li`
   margin: 25px;
   cursor: pointer;
   transition: 0.4s;
   &:hover {
      color: ${({ theme }) => theme.colors.neutral.white};
   }
`;
export const SocialMedia = styled.div`
   text-align: center;
`;
export const SocialMediaIcon = styled.img.attrs(({ icon }) => ({
   src: icon,
}))`
   margin: 15px;
`;
