import {
   ClientWrapper,
   Portrait,
   Review,
   ClientName,
   ClientProfession,
} from "./ClientReview.css";

const ClientReview = ({ id, name, profession, review, picture }) => {
   return (
      <ClientWrapper id={id}>
         <Portrait picture={picture} />
         <Review>{review}</Review>
         <ClientName>{name}</ClientName>
         <ClientProfession>{profession}</ClientProfession>
      </ClientWrapper>
   );
};
export default ClientReview;
