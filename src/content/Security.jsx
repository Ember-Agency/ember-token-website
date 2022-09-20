import { HashScroll } from "react-hash-scroll";
import { ExternalButton } from "../components/";
import "../styles/Security.scss";
import iconSecurity from "../assets/icon-security.png";

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
            <h5>Contract Address</h5>
            <code>0x36a8fcb1f8bca02dc74eb34281de3b9143eae8e3</code>
            <ExternalButton
              color="red"
              href="https://irp.cdn-website.com/1b45ecb9/files/uploaded/EmberToken_AuditReport_InterFi.pdf"
              target="_blank"
              rel="noreferrer"
            >
              InterFi Audit
            </ExternalButton>
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
