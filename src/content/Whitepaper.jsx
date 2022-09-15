import { HashScroll } from "react-hash-scroll";
import "../styles/Whitepaper.scss";
import iconWhitepaper from "../assets/icon-whitepaper.png";

export const Whitepaper = () => {
  return (
    <HashScroll hash="whitepaper">
      <article id="whitepaper" className="row">
        <h2>
          Want to learn more?{" "}
          <a
            href="https://embertoken.io/whitepaper.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Check out our whitepaper
          </a>
        </h2>
        <img src={iconWhitepaper} alt="Ember Token Whitepaper" />
      </article>
    </HashScroll>
  );
};
