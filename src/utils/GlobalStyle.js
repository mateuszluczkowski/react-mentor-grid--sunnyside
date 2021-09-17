import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#root, body {
    background: #FBFBFB;
    font-family: ${({ theme }) => theme.font.family.barlow.rules};
    font-size: ${({ theme }) => theme.font.fontSize};
    min-height: 100vh;
}
`;
export default GlobalStyle;
