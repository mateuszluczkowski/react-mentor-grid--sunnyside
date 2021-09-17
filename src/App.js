import { ThemeProvider } from "styled-components";
import "normalize.css";
import GlobalStyle from "utils/GlobalStyle";
import theme from "utils/theme";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <div>siemaneczko</div>
      </ThemeProvider>
   );
}

export default App;
