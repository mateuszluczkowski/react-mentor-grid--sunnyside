import styled from "styled-components";
const Wrapper = styled.div`
   width: 100%;
   overflow: hidden;
   display: grid;
   place-items: center center;
`;
const Content = styled.div`
   display: grid;
   max-width: 100%;
   grid-template-columns: ${({ theme }) => theme.layout.desktop};
   grid-template-rows: repeat(5, auto);
   grid-template-areas:
      "header"
      "main"
      "client"
      "gallery"
      "footer";
   @media (max-width: 980px) {
      grid-template-columns: 100%;
   }
`;

const Container = ({ children }) => {
   return (
      <Wrapper>
         <Content>{children}</Content>
      </Wrapper>
   );
};
export default Container;
