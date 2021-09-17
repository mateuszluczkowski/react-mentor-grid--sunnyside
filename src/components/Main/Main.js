import { MainSection } from "./Main.css";
import { Tile } from "components";

import { tiles, backgroundTiles } from "data";

const Main = () => {
   return (
      <MainSection>
         {tiles.map(({ backgroundIndex, id, text }) => (
            <Tile
               key={id}
               id={id}
               background={backgroundTiles[backgroundIndex]}
               button={text.button}
               text={text.text}
               title={text.title}
            />
         ))}
      </MainSection>
   );
};
export default Main;
