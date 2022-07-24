import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.svg";
import "./styles/App.scss";
import { Welcome } from "./Home";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
};

export const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="Ember Agency" />
      <Navigation />
    </header>
  );
};

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Welcome</a>
        </li>
        <li>
          <a href="/">Offerings</a>
        </li>
        <li>
          <a href="/">Whitepaper</a>
        </li>
        <li>
          <a href="/">Token</a>
        </li>
        <li>
          <a className="btn" href="/">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
