import {
   Button,
   ContentWrapper,
   Text,
   TileBackground,
   TileWrapper,
   Title,
   WhiteBackground,
} from "./Tile.css";
const Tile = ({ background, button, id, text, title, gridArea }) => {
   console.log(gridArea);
   return (
      <TileWrapper gridArea={gridArea}>
         <ContentWrapper button={button}>
            {title ? <Title button={button}>{title}</Title> : null}
            {text ? <Text button={button}>{text}</Text> : null}
            {button ? <Button id={id}>{button}</Button> : null}
         </ContentWrapper>
         {background ? (
            <TileBackground background={background} />
         ) : (
            <WhiteBackground />
         )}
      </TileWrapper>
   );
};
export default Tile;
