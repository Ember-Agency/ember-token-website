import logo from "../assets/logo-vertical.svg";

export const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Ember Token" />
      <p>
        &copy; 2022 Ember Token is a product of{" "}
        <a href="https://emberagency.io" target="_blank" rel="noreferrer">
          Ember Agency, LLC.
        </a>{" "}
        All Rights Reserved
      </p>
    </footer>
  );
};
