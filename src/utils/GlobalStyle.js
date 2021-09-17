import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import: url(${({ theme }) => theme.font.family.barlow.import});
@import: url(${({ theme }) => theme.font.family.fraunces.import});
body{
    font-family: ${({ theme }) => theme.font.family.barlow.rules};
    font-size: ${({ theme }) => theme.font.fontSize};
    min-height: 100vh;
}
`;
export default GlobalStyle;
