import styled from "styled-components";

const Container = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(5, auto);
   grid-template-areas:
      "header"
      "main"
      "client"
      "gallery"
      "footer";

   position: relative;
   left: 50%;
   transform: translateX(-50%);
   width: ${({ theme }) => theme.layout.desktop};
`;
export default Container;
