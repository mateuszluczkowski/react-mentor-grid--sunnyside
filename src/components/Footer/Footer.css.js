import styled from "styled-components";

export const FooterWrapper = styled.div`
   grid-area: footer;
   height: 350px;
   background-color: ${({ theme }) => theme.colors.primary.LightModerateCyan};
   color: ${({ theme }) => theme.colors.primary.DarkModerateCyan};
`;

export const Logo = styled.img.attrs(({ logo }) => ({
   src: logo,
}))``;
export const Menu = styled.ul``;
export const MenuItem = styled.li``;
export const SocialMedia = styled.div``;
export const SocialMediaIcon = styled.img``;
