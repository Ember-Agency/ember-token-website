import { HashScroll } from "react-hash-scroll";
import { ExternalButton, Waves } from "../components";
import { Team } from ".";
import "../styles/Contact.scss";

export const Contact = () => {
  return (
    <HashScroll hash="contact">
      <article id="contact">
        <h1>Have any questions?</h1>
        <ExternalButton color="black" href="mailto:support@emberagency.io">
          Contact Us
        </ExternalButton>
        <Team />
        <Waves />
      </article>
    </HashScroll>
  );
};
