import {
  // Contact,
  // Education,
  Recovery,
  Rewards,
  Security,
  Tokenomics,
  Welcome,
  Whitepaper,
} from "../content";

export const Home = () => {
  return (
    <main>
      <Welcome />
      <Rewards />
      <Whitepaper />
      <Tokenomics />
      <Security />
      <Recovery />
      {/* <Education />
      <Contact /> */}
    </main>
  );
};
