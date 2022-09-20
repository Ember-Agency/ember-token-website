import { HashScroll } from "react-hash-scroll";
import bioBatman from "../assets/bio-batman.png";
import bioJr from "../assets/bio-redbeard.png";
import "../styles/Team.scss";

export const Team = () => {
  return (
    <HashScroll hash="team">
      <article id="team">
        <div className="bio">
          <img src={bioJr} alt="JR AKA Redbeard" />
          <h3>JR "Redbeard"</h3>
          <h5>Co-Founder</h5>
          <h5>CEO/Creative Director</h5>
        </div>
        <div className="bio">
          <img src={bioBatman} alt="Matt AKA Batman" />
          <h3>Matt "Batman"</h3>
          <h5>Co-Founder</h5>
          <h5>CTO/Development Lead</h5>
        </div>
      </article>
    </HashScroll>
  );
};
