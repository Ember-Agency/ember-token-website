import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MobileMenu, Navigation } from "../layout";

export const Header = () => {
  return (
    <header>
      <Link to="#welcome">
        <img src={logo} className="logo" alt="Ember Token" />
      </Link>
      <Navigation />
      <MobileMenu />
    </header>
  );
};
