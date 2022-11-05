import "../styles/RecoveryPage.scss";
import logoCoyote from "../assets/logo-coyote.svg";
import imageMatches from "../assets/image-matches.png";
import imageHeart from "../assets/image-heart.png";

export const RecoveryPage = () => {
  return (
    <main id="recovery-page">
      <div className="intro">
        <h5>LIGHTING THE PATH TO</h5>
        <h1>Recovery</h1>
        <p>
          Ember was forged from the ashes of fallen opportunity. Our founders
          turned that pain into progress by implementing the Recovery Tax into
          the Ember Tokenomics. The BNB generated through this tax exists to
          bring opportunity to new projects hitting the market and to serve
          projects that have fallen victim to malicious attacks and hacks. We
          have an unapologetic commitment to shining light in the dark alleys of
          crypto and wrap our efforts with heavy governance and protection.
        </p>
      </div>
      <div className="content">
        <div className="row">
          <div className="col">
            <h5>WHAT WE'RE DOING</h5>
            <h2>Matches lighting matches.</h2>
            <p>
              We believe in the power of “good” and leading the charge for
              positive change in DeFi; something this space is overdue for. When
              you invest in Ember, you invest in others. A portion of our
              tokenomics is dedicated to helping bring opportunity to new
              projects in the space while also investing in the recovery and
              support of others who have lost their way.
            </p>
            <p>
              Our mission is to leverage our knowledge, talents, insights, and
              experience to help others find success in DeFi. The smallest Ember
              can create the largest fire.
            </p>
          </div>
          <div className="col">
            <img src={imageMatches} alt="Matches lighting matches" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={imageHeart} alt="Heart" />
          </div>
          <div className="col">
            <h5>WHY WE'RE DOING IT</h5>
            <h2>Act with honor, and honor will aid you.</h2>
            <p>
              There's no excuse for doing the right thing and driving success
              for others. DeFi is filled with a wide gamut of exciting and
              innovative projects that might lack governance. Alternatively,
              there are hundreds, if not thousands of projects that have fallen
              victim to malicious scams and rug pulls by bad actors. While we
              can't help everybody, Ember is committed to a thorough, internal
              vetting process before we bring it to InterFi, our premier audit
              partner.
            </p>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="row">
          <div className="col">
            <h5>CURRENT RECOVERY PROJECT</h5>
            <h2>Coyote Coin Investors</h2>
            <p>
              The Coyote Coin project hits home to the Ember team and many in
              our community. We aren't working to recover the project itself but
              are leveraging the Ember Recovery Wallet to accrue BNB (BEP-20)
              and help investors in that project reclaim over{" "}
              <strong>1900 BNB</strong> that was stolen. Ember is proud to
              support those who were impacted by the malicious attacks on
              Coyote. We will be distributing BNB to Coyote participants every
              60 days until all stolen funds are donated back.
            </p>
            <p>
              Your investment into Ember brings rewards to you and refuge to
              others just like you. Here's what you need to know:
            </p>
          </div>
          <div className="col">
            <div className="card">
              <img src={logoCoyote} alt="Coyote Coin" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Recovery Project
            <strong>Coyote Coin Community</strong>
          </div>
          <div className="col">
            Recovery Goal
            <strong>1900 BNB</strong>
          </div>
          <div className="col">
            Amount Raised to Date
            <strong>161 BNB</strong>
          </div>
        </div>
        <div className="cta">
          <h3>Did you invest in Coyote Coin?</h3>
          <div className="row">
            <div className="col">
              Yes, I'd like to claim my BNB
              <a href="/" className="btn">
                Click Here
              </a>
            </div>
            <div className="col">
              Yes and I'd like to roll my BNB into EMBER
              <a href="/" className="btn">
                Click Here
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="constant">
        <h2>WE ARE THE CONSTANT</h2>
      </div>
    </main>
  );
};
