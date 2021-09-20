import {
   HamburgerIcon,
   Icon,
   NavWrapper,
   Link,
   Logo,
   LogoWrapper,
} from "./Nav.css";

import navLinks from "data/navLinks";

import logo from "assets/img/logo.svg";
import hamburgerIcon from "assets/img/icon-hamburger.svg";

const Nav = ({ isMobile }) => {
   return (
      <NavWrapper>
         <LogoWrapper>
            <Logo path={logo} />
         </LogoWrapper>

         {navLinks.map((link) => (
            <Link key={link} isMobile={isMobile}>
               {link}
            </Link>
         ))}
         <HamburgerIcon isMobile={isMobile}>
            <Icon icon={hamburgerIcon} />
         </HamburgerIcon>
      </NavWrapper>
   );
};
export default Nav;
