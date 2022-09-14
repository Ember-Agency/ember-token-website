import { HashScroll } from "react-hash-scroll";
import "../styles/Security.scss";
import iconSecurity from "../assets/icon-security.svg";

export const Security = () => {
  return (
    <HashScroll hash="security">
      <article id="security">
        <div className="content">
          <div className="intro">
            <h5>Security</h5>
            <h2>Governance, first. Growth, second</h2>
            <p>
              We've seen, first hand, what happens when proper governance,
              security, and advisory isn't instituted properly. It creates a
              gateway for bad actors to surface and find vulnerable exploits in
              code, social media, and beyond. We have a board of advisors to
              keep our eye on the ball, legal counsel to keep our growing
              ecosystem of products and services protected, and the
              hardest-working team this side of the 'chain.
            </p>
          </div>
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <strong className="blue">Future-proofed</strong>
                  Fully-upgradable contract to prevent the need for future
                  versions.
                </li>
                <li>
                  <strong className="blue">Smart Routing</strong>
                  No contract sales on the chart and lower gas fees for all!
                </li>
                <li>
                  <strong className="blue">No Minting Function</strong>
                  Ember Token has a FIXED maximum token supply.
                </li>
              </ul>
            </div>
            <div className="col">
              <img src={iconSecurity} alt="Security" />
            </div>
            <div className="col">
              <ul>
                <li>
                  <strong className="red">Fully-KYC'd Team</strong>
                  Real people… with a real business. We KYC'd to InterFi,
                  TRU-Audit, and BlockStar.
                </li>
                <li>
                  <strong className="red">Multiple Audits</strong>
                  Our contract was audited by InterFi and TRU-Audit.
                </li>
                <li>
                  <strong className="red">Fierce Governance</strong>
                  We are strapped with business, financial, economic, and legal
                  advisory.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </HashScroll>
  );
};
