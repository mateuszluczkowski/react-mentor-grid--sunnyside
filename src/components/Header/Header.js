import { Arrow, BackgroundImage, HeaderWrapper, Text } from "./Header.css";
import { Nav } from "components";
import headerBackground from "assets/img/desktop/image-header.jpg";
import headerBackgroundMobile from "assets/img/mobile/image-header.jpg";
import arrowIcon from "assets/img/icon-arrow-down.svg";
const Header = ({ isMobile }) => {
   return (
      <HeaderWrapper>
         <BackgroundImage
            background={isMobile ? headerBackgroundMobile : headerBackground}
         />
         <Nav isMobile={isMobile} />
         <Text>we are creatives</Text>
         <Arrow path={arrowIcon} />
      </HeaderWrapper>
   );
};
export default Header;
