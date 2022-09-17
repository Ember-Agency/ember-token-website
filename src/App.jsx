import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Home } from "./layout";
import "./styles/App.scss";

export const App = () => {
  useEffect(() => {
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    // redirect user to BlockStar Launchpad
    if (hostname === "claim.embertoken.io" || pathname === "/claim") {
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
