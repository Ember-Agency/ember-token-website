import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { NFT } from "./content";
import { Dashboard, Footer, Header, Home, RecoveryPage } from "./layout";
import "./styles/App.scss";

export const App = () => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname.substring(1));

  useEffect(() => {
    setPage(location.pathname.substring(1));
  }, [location]);

  return (
    <main className={`app ${page}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/recovery" element={<RecoveryPage />} />
      </Routes>
      <Footer />
    </main>
  );
};
