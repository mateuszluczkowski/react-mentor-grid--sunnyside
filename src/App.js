import { ThemeProvider } from "styled-components";
import "normalize.css";
import { Helmet } from "react-helmet";

import GlobalStyle from "utils/GlobalStyle";
import theme from "utils/theme";

import { Container, Header, Main } from "components";

function App() {
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
               <Header />
               <Main />
            </Container>
         </ThemeProvider>
      </>
   );
}

export default App;
