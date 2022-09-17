import { Routes, Route } from "react-router-dom";
import { Footer, Header, Home } from "./layout";
import { Redirect } from "./Redirect";
import "./styles/App.scss";

export const App = () => {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/claim" element={<Redirect />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
};
