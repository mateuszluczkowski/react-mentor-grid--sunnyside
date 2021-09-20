import styled from "styled-components";

import { gallery } from "data";
const GalleryWrapper = styled.div`
   display: grid;
   grid-area: gallery;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: 1fr;
   grid-template-areas: "picture1 picture2 picture3 picture4";
`;
const Picture = styled.img.attrs(({ picture, alt }) => ({
   src: picture,
   alt,
}))`
   grid-area: ${({ id }) => `picture${id}`};
   width: 100%;
`;

const Gallery = ({ isMobile }) => {
   console.log(isMobile);
   return (
      <GalleryWrapper>
         {gallery.map(({ id, desktop, mobile, alt }) => (
            <Picture
               key={id}
               id={id}
               picture={isMobile ? mobile : desktop}
               alt={alt}
            />
         ))}
      </GalleryWrapper>
   );
};
export default Gallery;
