import { NavWrapper, Link, Logo, LogoWrapper } from "./Nav.css";

import navLinks from "data/navLinks";
import logo from "assets/img/logo.svg";

const Nav = () => {
   return (
      <NavWrapper>
         <LogoWrapper>
            <Logo path={logo} />
         </LogoWrapper>

         {navLinks.map((link) => (
            <Link key={link}>{link}</Link>
         ))}
      </NavWrapper>
   );
};
export default Nav;
