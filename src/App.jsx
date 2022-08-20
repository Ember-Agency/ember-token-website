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
      <Footer />
    </main>
  );
};

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" alt="Ember Agency" />
      </Link>
      <Navigation />
    </header>
  );
};

export const Footer = () => {
  return (
    <footer>
      <p>&copy; 2022 Ember Agency, LLC. | All Rights Reserved</p>
    </footer>
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
      <span>Discord</span>
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
      <span>Telegram</span>
    </a>
  );
};

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="https://embertoken.io/whitepaper.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Whitepaper
          </a>
        </li>
      </ul>
    </nav>
  );
};
