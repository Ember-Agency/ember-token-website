import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Home } from "./layout";
import "./styles/App.scss";

export const App = () => {
  useEffect(() => {
    // redirect user to BlockStar Launchpad
    if (window.location.hostname === "claim.embertoken.io") {
      window.location =
        "https://launchpad.blockstar.site/ember-presale/?chainid=56";
    }
  }, []);

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
};
