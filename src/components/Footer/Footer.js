import {
   Content,
   FooterWrapper,
   Logo,
   LogoWrapper,
   Menu,
   MenuItem,
   SocialMedia,
   SocialMediaIcon,
} from "./Footer.css";
import { socialIcons, navLinks } from "data";
import logo from "assets/img/logo.svg";
const Footer = () => {
   return (
      <FooterWrapper>
         <Content>
            <LogoWrapper>
               <Logo logo={logo} />
            </LogoWrapper>
            <Menu>
               {navLinks.map((link, index) => {
                  if (index === navLinks.length - 1) return null;
                  return <MenuItem key={link}>{link}</MenuItem>;
               })}
            </Menu>
            <SocialMedia>
               {socialIcons.map((icon) => (
                  <SocialMediaIcon key={icon.name} icon={icon.icon} />
               ))}
            </SocialMedia>
         </Content>
      </FooterWrapper>
   );
};
export default Footer;
