import { Link } from "react-router-dom";

const ButtonInternal = ({ text }) => {
  return (
    <>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="text">{text}</span>
    </>
  );
};

export const ExternalButton = ({ children, color, href = "/", ...props }) => {
  return (
    <a className={`btn ${color}`} href={href} {...props}>
      <ButtonInternal text={children} />
    </a>
  );
};

export const Button = ({ children, color, to = "/", ...props }) => {
  return (
    <Link className={`btn ${color}`} to={to} {...props}>
      <ButtonInternal text={children} />
    </Link>
  );
};
