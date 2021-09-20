import styled from "styled-components";

export const GalleryWrapper = styled.div`
   display: grid;
   grid-area: gallery;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: 1fr;
   grid-template-areas: "picture1 picture2 picture3 picture4";
   @media (max-width: 980px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
         "picture1 picture2"
         "picture3 picture4";
   }
`;
export const Picture = styled.img.attrs(({ picture, alt }) => ({
   src: picture,
   alt,
}))`
   grid-area: ${({ id }) => `picture${id}`};
   width: 100%;
`;
