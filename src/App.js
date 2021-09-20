import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";
import { Helmet } from "react-helmet";

import GlobalStyle from "utils/GlobalStyle";
import theme from "utils/theme";

import {
   ClientSection,
   Container,
   Footer,
   Header,
   Gallery,
   Main,
} from "components";

function App() {
   const [isMobile, setIsMobile] = useState(false);
   const checkIsMobile = () => {
      if (window.innerWidth < 980) return setIsMobile(true);
      else return setIsMobile(false);
   };
   window.onresize = checkIsMobile;
   useEffect(() => checkIsMobile());
   return (
      <>
         <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossorigin
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Fraunces:wght@400;700;900&display=swap"
               rel="stylesheet"
            />
         </Helmet>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
               <Header isMobile={isMobile} />
               <Main isMobile={isMobile} />
               <ClientSection />
               <Gallery isMobile={isMobile} />
               <Footer />
            </Container>
         </ThemeProvider>
      </>
   );
}

export default App;
