import styled from "styled-components";

export const MainSection = styled.div`
   grid-area: main;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: repeat(3, 600px);
   grid-template-areas:
      "tile1 picture1"
      "picture2 tile2"
      "picture3 picture4";
`;
