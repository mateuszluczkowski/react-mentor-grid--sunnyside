import { MainSection } from "./Main.css";
import { Tile } from "components";

import { tiles, backgroundTiles } from "data";

const Main = ({ isMobile }) => {
   return (
      <MainSection>
         {tiles.map(({ backgroundIndex, id, text, grid }) => (
            <Tile
               key={id}
               id={id}
               background={
                  backgroundTiles[backgroundIndex][
                     isMobile ? "mobile" : "desktop"
                  ]
               }
               button={text.button}
               text={text.text}
               title={text.title}
               gridArea={grid}
            />
         ))}
      </MainSection>
   );
};
export default Main;
