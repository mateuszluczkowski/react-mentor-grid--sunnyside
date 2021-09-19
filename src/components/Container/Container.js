import styled from "styled-components";
const Wrapper = styled.div`
   width: 100%;
   display: grid;
   place-items: center center;
`;
const Content = styled.div`
   display: grid;

   grid-template-columns: ${({ theme }) => theme.layout.desktop};
   grid-template-rows: repeat(5, auto);
   grid-template-areas:
      "header"
      "main"
      "client"
      "gallery"
      "footer";
`;

const Container = ({ children }) => {
   return (
      <Wrapper>
         <Content>{children}</Content>
      </Wrapper>
   );
};
export default Container;
