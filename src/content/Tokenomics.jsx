import { HashScroll } from "react-hash-scroll";
import "../styles/Tokenomics.scss";
import imageTokenomics from "../assets/image-tokenomics.svg";
import imageNft from "../assets/image-nfts.svg";

export const Tokenomics = () => {
  return (
    <HashScroll hash="tokenomics">
      <article id="tokenomics">
        <div className="content">
          <div className="row">
            <div className="col">
              <h5>Ember Tokenomics</h5>
              <h2>Where purpose meets function</h2>
              <div className="card">
                <img src={imageTokenomics} alt="Ember Tokenomics" />
                <div className="row">
                  <div className="col">
                    <div className="subheading">Total Supply</div>
                    <strong>10 Billion</strong>
                  </div>
                  <div className="col">
                    <div className="subheading">EMBER to BNB</div>
                    <strong>18451705.13</strong>
                  </div>
                  <div className="col">
                    <div className="subheading">EMBER to Liquidity</div>
                    <strong>5,500,000,000</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h5>Ember NFT Rewards</h5>
              <h2>Easy on the eyes. Better on the wallet</h2>
              <div className="card">
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
            <div className="col">
              <h5>Ember Consultinomics</h5>
              <h2>Beyond Tokenomics: We Forge. You Earn</h2>
              <div className="card">
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
            </div>
          </div>
        </div>
      </article>
    </HashScroll>
  );
};
