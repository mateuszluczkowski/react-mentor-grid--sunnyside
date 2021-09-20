import { useState } from "react";

import { HamburgerIcon, NavList, Link, Logo, Triangle } from "./Nav.css";

import navLinks from "data/navLinks";

import logo from "assets/img/logo.svg";
import hamburgerIcon from "assets/img/icon-hamburger.svg";

const Nav = ({ isMobile }) => {
   const [isDisplayed, setIsDisplayed] = useState(false);
   const handleHamburger = () => {
      console.log(isDisplayed);
      setIsDisplayed(!isDisplayed);
   };
   return (
      <>
         <Logo path={logo} />
         <NavList isDisplayed={isDisplayed}>
            {navLinks.map((link) => (
               <Link key={link}>{link}</Link>
            ))}
            {isMobile ? <Triangle /> : null}
         </NavList>

         {isMobile ? (
            <HamburgerIcon
               onClick={handleHamburger}
               icon={hamburgerIcon}
               isMobile={isMobile}
            />
         ) : null}
      </>
   );
};
export default Nav;
