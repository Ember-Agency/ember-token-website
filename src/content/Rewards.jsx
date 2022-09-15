import { HashScroll } from "react-hash-scroll";
import { Link } from "react-router-dom";
import "../styles/Rewards.scss";
import iconToken from "../assets/icon-token-reflections.svg";
import iconNFT from "../assets/icon-nft-rewards.svg";
import iconAgency from "../assets/icon-agency-rewards.svg";

const TokenReflections = () => {
  return (
    <div className="card col">
      <img src={iconToken} alt="Token Reflections" />
      <h2>Token Reflections</h2>
      <p>
        Ember's tokenomics are designed to reward holders with 4% reflections on
        all buy &amp; sell transactions on the network. This means, every time
        our token is bought or sold, the holder gets 90% delivered to them. 4%
        of their transaction goes directly back to holders as shared
        reflections. The remaining 6% is outlined further below.
      </p>
      <Link to="#tokenomics">Learn more</Link>
    </div>
  );
};

const NFTRewards = () => {
  return (
    <div className="card col">
      <img src={iconNFT} alt="NFT Rewards" />
      <h2>NFT Rewards</h2>
      <p>
        Not only are our NFTs made in-house by our founders, they bring Ember
        Token holders even more opportunity for earnings. Level 1 NFTs (entry
        level) provide access to a reward pool lottery while Levels 2 &amp; 3
        create a 1-5x percentage of ownership of the reward pool distributions,
        themselves. Yeah, we thought this one through pretty good...
      </p>
      <Link to="#nfts">Learn more</Link>
    </div>
  );
};

const AgencyRewards = () => {
  return (
    <div className="card col">
      <img src={iconAgency} alt="Agency Rewards" />
      <h2>Agency Rewards</h2>
      <p>
        This is where things get interesting. Ember's longevity isn't driven by
        the success of our token, as it will be one of many over time. Our
        footprint is driven by the consulting &amp; service offerings we bring
        to the blockchain space. All Ember Token holders who also hold a Level 2
        or higher NFT will have their share of 3% of our service revenue.
      </p>
      <Link to="#consultinomics">Learn more</Link>
    </div>
  );
};

export const Rewards = () => {
  return (
    <HashScroll hash="rewards">
      <article id="rewards">
        <div className="content">
          <h1>Ember Token brings three layers of rewards to holders.</h1>
          <div className="row">
            <TokenReflections />
            <NFTRewards />
            <AgencyRewards />
          </div>
        </div>
      </article>
    </HashScroll>
  );
};
