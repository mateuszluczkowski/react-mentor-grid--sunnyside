import { GalleryWrapper, Picture } from "./Gallery.css";

import { gallery } from "data";
const Gallery = ({ isMobile }) => {
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
