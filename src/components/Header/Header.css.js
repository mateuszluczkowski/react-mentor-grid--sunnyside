import styled from "styled-components";

export const HeaderWrapper = styled.div`
   grid-area: header;
   position: relative;
   font-size: 0;
`;
export const BackgroundImage = styled.img.attrs(({ background }) => ({
   src: background,
}))`
   width: 100%;
   position: relative;
   top: 0;
   left: 0;
`;
export const Text = styled.div`
   display: inline-block;
   position: absolute;
   width: 100%;
   top: 200px;
   left: 0;
   text-align: center;
   color: ${({ theme }) => theme.colors.neutral.white};
   font-family: ${({ theme }) => theme.font.family.fraunces.rules};
   font-weight: 900;
   font-size: 55px;
   text-transform: uppercase;
   letter-spacing: 8px;
   @media (max-width: 980px) {
      top: 150px;
      font-size: 38px;
   }
`;

export const Arrow = styled.img.attrs(({ path }) => ({
   src: path,
}))`
   display: inline-block;
   position: absolute;
   top: 355px;
   left: 50%;
   transform: translateX(-50%);
   @media (max-width: 980px) {
      top: 300px;
   }
`;
