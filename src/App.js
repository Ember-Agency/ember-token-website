import { Link, Routes, Route } from "react-router-dom";
import logo from "./assets/logo.svg";
import "./styles/App.scss";
import { Welcome } from "./Home";

export const App = () => {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </main>
  );
};

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" alt="Ember Agency" />
      </Link>
      {/* <Navigation /> */}
    </header>
  );
};

export const DiscordLink = () => {
  return (
    <a
      className="btn"
      href="https://discord.gg/BVFZ6gTcYn"
      rel="noreferrer"
      target="_blank"
    >
      Discord
    </a>
  );
};

export const TelegramLink = () => {
  return (
    <a
      className="btn"
      href="https://t.me/ember_token_io"
      rel="noreferrer"
      target="_blank"
    >
      Telegram
    </a>
  );
};

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/">Staking</Link>
        </li>
        <li>
          <Link to="/">Whitepaper</Link>
        </li>
        <li>
          <Link to="/">Tokenomics</Link>
        </li>
        <li>
          <TelegramLink />
        </li>
      </ul>
    </nav>
  );
};
