import { Routes, Route } from "react-router-dom";
import { Footer, Header, Home } from "./layout";
import "./styles/App.scss";

export const App = () => {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route
          path="/claim"
          element={() => {
            window.location =
              "https://launchpad.blockstar.site/ember-presale/?chainid=56";
            return null;
          }}
        />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
};
