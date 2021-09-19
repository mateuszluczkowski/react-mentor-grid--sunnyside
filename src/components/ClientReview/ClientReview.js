import {
   ClientWrapper,
   Portrait,
   Review,
   ClientName,
   ClientProfession,
} from "./ClientReview.css";

const ClientReview = ({ name, profession, review, picture }) => {
   return (
      <ClientWrapper>
         <Portrait picture={picture} />
         <Review>{review}</Review>
         <ClientName>{name}</ClientName>
         <ClientProfession>{profession}</ClientProfession>
      </ClientWrapper>
   );
};
export default ClientReview;
