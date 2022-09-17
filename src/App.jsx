import { Routes, Route } from "react-router-dom";
import { Dashboard, Footer, Header, Home } from "./layout";
import "./styles/App.scss";

export const App = () => {
  const pathname = window.location.pathname;
  const pageClass = pathname === "/" ? "home" : "dashboard";

  return (
    <main className={`app ${pageClass}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </main>
  );
};
