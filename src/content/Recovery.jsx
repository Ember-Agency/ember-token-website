import { Link } from "react-router-dom";
import { HashScroll } from "react-hash-scroll";
import { ExternalButton } from "../components";
import "../styles/Recovery.scss";
import logoCoyote from "../assets/logo-coyote.svg";

export const Recovery = () => {
  return (
    <HashScroll hash="recovery">
      <article id="recovery">
        <div className="content row">
          <div className="col">
            <h1>A community coin with a continual recovery mission.</h1>
            <p>
              We built Ember Token with our community in mind. We listen to
              those who have invested in us and seek their insights, feedback,
              and wishes on a daily basis. Next, we take all of that and wrap it
              with a layer of business, financial, economic, and legal
              governance to ensure the protection of our hard work and funds. We
              have the "best community in crypto" (according to our community),
              are welcoming in new members each day, and would love to have you
              join us.
            </p>
          </div>
          <div className="col">
            <h5>Current Recovery Project</h5>
            <div className="card-border">
              <div className="card">
                <img src={logoCoyote} alt="Coyote Coin" />
                <p>
                  The Coyote Coin project hits home to the Ember team and many
                  in our community. At the current time, we aren't looking to
                  recover the project itself. Instead, we'll be utilizing the
                  Ember Recovery Wallet to accrue BNB (BEP-20) and help
                  investors in that project reclaim over 1900 BNB that was
                  stolen. Ember is proud to support those who were impacted by
                  the malicious attacks on Coyote.
                </p>
                <Link to="/recovery" className="pill red">
                  Recovery Details
                </Link>
              </div>
            </div>
            <ExternalButton color="red" href="mailto:support@emberagency.io">
              Submit A Project
            </ExternalButton>
          </div>
        </div>
      </article>
    </HashScroll>
  );
};
