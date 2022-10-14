import { Routes, Route } from "react-router-dom";
import { NFT } from "./content";
import { Dashboard, Footer, Header, Home } from "./layout";
import "./styles/App.scss";

export const App = () => {
  const pathname = window.location.pathname;
  const pageClass = pathname.substring(1);

  return (
    <main className={`app ${pageClass}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nft" element={<NFT />} />
      </Routes>
      <Footer />
    </main>
  );
};
