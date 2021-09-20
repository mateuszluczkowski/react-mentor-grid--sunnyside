import styled from "styled-components";

export const MainSection = styled.div`
   grid-area: main;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: repeat(3, 600px);
   grid-template-areas:
      "tile1 tile2"
      "tile3 tile4"
      "tile5 tile6";
   @media (max-width: 980px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, auto);
      grid-template-areas:
         "tile2"
         "tile1"
         "tile3"
         "tile4"
         "tile5"
         "tile6";
      max-width: 100%;
   }
`;
