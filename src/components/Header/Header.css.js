import styled from "styled-components";

export const HeaderWrapper = styled.ul`
   grid-area: header;
   position: relative;
   width: 100%;
   height: 800px;
`;
export const BackgroundImage = styled.img.attrs(({ background }) => ({
   src: background,
}))`
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -5;
`;
export const Text = styled.div`
   display: inline-block;
   position: relative;
   top: 75px;
   left: 50%;
   transform: translateX(-50%);
   color: ${({ theme }) => theme.colors.neutral.white};
   font-family: ${({ theme }) => theme.font.family.fraunces.rules};
   font-weight: 900;
   font-size: 55px;
   text-transform: uppercase;
   letter-spacing: 9px;
`;

export const Arrow = styled.img.attrs(({ path }) => ({
   src: path,
}))`
   display: inline-block;
   position: absolute;
   top: 355px;
   left: 50%;
   transform: translateX(-50%);
`;
