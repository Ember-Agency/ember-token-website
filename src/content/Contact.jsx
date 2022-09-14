import { HashScroll } from "react-hash-scroll";
import { Button } from "../components";

export const Contact = () => {
  return (
    <HashScroll hash="contact">
      <article id="contact" className="row">
        <h1>Have any questions?</h1>
        <Button color="black" to="#contact">
          Contact Us
        </Button>
      </article>
    </HashScroll>
  );
};
