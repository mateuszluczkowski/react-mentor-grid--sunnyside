import { Button, ContentWrapper, Text, TileWrapper, Title } from "./Tile.css";
const Tile = ({ background, button, id, text, title }) => {
   return (
      <TileWrapper background={background}>
         <ContentWrapper button={button}>
            {title ? <Title button={button}>{title}</Title> : null}
            {text ? <Text button={button}>{text}</Text> : null}
            {button ? <Button id={id}>{button}</Button> : null}
         </ContentWrapper>
      </TileWrapper>
   );
};
export default Tile;
