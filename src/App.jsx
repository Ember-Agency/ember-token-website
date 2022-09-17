import { Routes, Route } from "react-router-dom";
import { Footer, Header, Home } from "./layout";
import "./styles/App.scss";

export const App = () => {
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
