import ember from "./assets/ember-icon.svg";
import "./styles/Home.scss";

export const Welcome = () => {
  return (
    <article id="welcome" className="row">
      <div className="content col">
        <h1>We are the constant.</h1>
        <p>
          We glow to empower new and recovering projects in the blockchain and
          cryptocurrency space through digital leadership, immersive experience
          design, and clean code. Ember is a driving force of technological
          advancement through creative thinking, technical advisory, digital
          governance, and a deep-rooted desire to bring education, stability,
          and trust to the blockchain industry.
        </p>
        <a href="/" className="btn">
          Work with us
        </a>
      </div>
      <div className="col">
        <img src={ember} className="large-ember" alt="Ember graphic" />
      </div>
    </article>
  );
};
