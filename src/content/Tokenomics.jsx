import { HashScroll } from "react-hash-scroll";
import { Slider } from "../components";
import "../styles/Tokenomics.scss";
import imageTokenomics from "../assets/image-tokenomics.svg";
import imageNft from "../assets/image-nfts.svg";

const EmberTokenomics = () => {
  return (
    <>
      <h5>Ember Tokenomics</h5>
      <h2>Where purpose meets function</h2>
      <div id="ember-tokenomics" className="card">
        <div className="card-content">
          <img src={imageTokenomics} alt="Ember Tokenomics" />
          <div className="row">
            <div className="col">
              <div className="subheading">Total Supply</div>
              <strong>10 Billion</strong>
            </div>
            <div className="col">
              <div className="subheading">Normal Buy &amp; Sell Tax</div>
              <strong>10%</strong>
            </div>
            <div className="col">
              <div className="subheading">EMBER to Liquidity</div>
              <strong>4,300,000,000</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NFTRewards = () => {
  return (
    <>
      <h5>Ember NFT Rewards</h5>
      <h2>Easy on the eyes. Better on the wallet</h2>
      <div id="nft-rewards" className="card">
        <div className="card-content">
          <h3>A handmade collection by our founders</h3>
          <img src={imageNft} alt="" />
          <div className="row">
            <div className="col">
              <div className="subheading">Level 1</div>
              <strong>0.1 - 0.5 BNB</strong>
            </div>
            <div className="col">
              <div className="subheading">Level 2</div>
              <strong>0.6 - 1 BNB</strong>
            </div>
            <div className="col">
              <div className="subheading">Level 3</div>
              <strong>1 - 6 BNB</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const RevenueBreakdown = () => {
  return (
    <div className="revenue">
      <h4>Revenue Breakdown</h4>
      <div className="row">
        <div className="col">
          <div className="subheading">Ember Operations</div>
          <strong className="red">75%</strong>
        </div>
        <div className="col">
          <div className="subheading">Corporate Buybacks</div>
          <strong className="blue">22%</strong>
        </div>
        <div className="col">
          <div className="subheading">Corporate Contribution</div>
          <strong className="orange">3%</strong>
        </div>
      </div>
    </div>
  );
};

const EmberConsultinomics = () => {
  return (
    <HashScroll hash="consultinomics">
      <>
        <h5>Ember Consultinomics</h5>
        <h2>Beyond Tokenomics: We Forge. You Earn</h2>
        <div id="consultinomics" className="card">
          <div className="card-content">
            <h1>
              A+B+C+D = <em>Ember</em>
            </h1>
            <div className="row">
              <ul className="col">
                <li>Advisory</li>
                <li>Digital Consulting</li>
                <li>Tokenomic Strategies</li>
                <li>Staking + Yield Farming</li>
                <li>DeFi Mechanisms</li>
                <li>Blockchain Consulting</li>
              </ul>
              <ul className="col">
                <li>Branding</li>
                <li>Brand Assessments</li>
                <li>Business + Product Naming</li>
                <li>Identity Development</li>
                <li>Brand Voice + Personality</li>
                <li>Communication + Style Guides</li>
              </ul>
              <ul className="col">
                <li>Code</li>
                <li>Web Development</li>
                <li>Software Engineering</li>
                <li>Smart Contract Development</li>
                <li>Custom Applications</li>
                <li>Blockchain Integrations</li>
              </ul>
              <ul className="col">
                <li>Design</li>
                <li>UX + UI Design</li>
                <li>Graphic + Web Design</li>
                <li>NFT Collections</li>
                <li>Illustration</li>
                <li>Social Strategies</li>
              </ul>
            </div>
            <RevenueBreakdown />
          </div>
        </div>
      </>
    </HashScroll>
  );
};

export const Tokenomics = () => {
  return (
    <HashScroll hash="tokenomics">
      <article id="tokenomics">
        <div className="content">
          <Slider
            slides={[
              <EmberTokenomics />,
              <NFTRewards />,
              <EmberConsultinomics />,
            ]}
          />
        </div>
      </article>
    </HashScroll>
  );
};
