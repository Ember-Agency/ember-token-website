import { HashScroll } from "react-hash-scroll";
import ember from "../assets/ember-icon.svg";
import "../styles/Welcome.scss";
import {
  ExternalButton,
  FloatingEmbers,
  RotatingText,
  Waves,
} from "../components";

const rotatingText = [
  "Swap your BNB for Ember Safely & Securely",
  "Ember Token launches Saturday, 9/17 at 12pm EDT",
  "We are the constant.",
];

export const Welcome = () => {
  return (
    <HashScroll hash="welcome">
      <article id="welcome">
        <div className="content row">
          <div className="statement col">
            <RotatingText text={rotatingText} />
            <p>
              We glow to empower new and recovering projects in the blockchain
              and cryptocurrency space through digital leadership, immersive
              experience design, and clean code. Ember is a driving force of
              technological advancement through creative thinking, technical
              advisory, digital governance, and a deep-rooted desire to bring
              education, stability, and trust to the blockchain industry.
            </p>
            <ExternalButton
              color="red"
              href="https://swap.embertoken.io"
              rel="noreferrer"
              target="_blank"
            >
              View Ember Swap
            </ExternalButton>
          </div>
          <div className="large-ember col">
            <img src={ember} alt="Ember graphic" />
            <FloatingEmbers />
          </div>
        </div>
        <Waves />
      </article>
    </HashScroll>
  );
};
