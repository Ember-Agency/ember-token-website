import ember from "../assets/ember-icon.svg";
import "../styles/Welcome.scss";
import {
  DiscordLink,
  FloatingEmbers,
  RotatingText,
  TelegramLink,
  Waves,
} from "../components";

const rotatingText = [
  "Swap your BNB for Ember Safely & Securely",
  "Ember Token launches on Saturday, 9/17 at 12pm EDT",
  "We are the constant.",
];

export const Welcome = () => {
  return (
    <article id="welcome" className="row">
      <div className="content col">
        <RotatingText text={rotatingText} />
        <p>
          We glow to empower new and recovering projects in the blockchain and
          cryptocurrency space through digital leadership, immersive experience
          design, and clean code. Ember is a driving force of technological
          advancement through creative thinking, technical advisory, digital
          governance, and a deep-rooted desire to bring education, stability,
          and trust to the blockchain industry.
        </p>
        <DiscordLink />
        <TelegramLink />
      </div>
      <div className="large-ember col">
        <img src={ember} alt="Ember graphic" />
        <FloatingEmbers />
      </div>
      <Waves />
    </article>
  );
};
