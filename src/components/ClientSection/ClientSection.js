import { Content, ClientWrapper, Title } from "./ClientSetion.css";
import { ClientReview } from "components";

import { clientReviews } from "data";

const ClientSection = () => {
   return (
      <ClientWrapper>
         <Content>
            <Title>client testimonials</Title>
            {clientReviews.map(({ id, name, profession, review, picture }) => (
               <ClientReview
                  key={id}
                  id={id}
                  name={name}
                  profession={profession}
                  review={review}
                  picture={picture}
               />
            ))}
         </Content>
      </ClientWrapper>
   );
};
export default ClientSection;
