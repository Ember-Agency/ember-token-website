import { HashScroll } from "react-hash-scroll";
import ember from "../assets/ember-icon.svg";
import "../styles/Welcome.scss";
import { FloatingEmbers, RotatingText, Waves } from "../components";

const rotatingText = [
  "Swap your BNB for Ember Safely & Securely",
  "Ember Token is LIVE!",
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
            <div className="cta">
              <a
                className="pill red"
                href="https://launchpad.blockstar.site/swap/"
                rel="noreferrer"
                target="_blank"
              >
                Buy EMBER Now
              </a>
              <a
                className="pill"
                href="https://launchpad.blockstar.site/ember-presale/?chainid=56"
                rel="noreferrer"
                target="_blank"
              >
                Claim Presale tokens!
              </a>
            </div>
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
