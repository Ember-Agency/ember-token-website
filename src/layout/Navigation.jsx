import { Link } from "react-router-dom";

export const Navigation = ({ onNavigate }) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="#link" onClick={handleClick}>
            Welcome
          </Link>
        </li>
        <li>
          <Link to="#link" onClick={handleClick}>
            Utility
          </Link>
        </li>
        <li>
          <Link to="#link" onClick={handleClick}>
            Tokenomics
          </Link>
        </li>
        <li>
          <Link to="#link" onClick={handleClick}>
            Security
          </Link>
        </li>
        <li>
          <Link to="#link" onClick={handleClick}>
            How To Buy
          </Link>
        </li> */}
        <li>
          <a
            href="https://embertoken.io/whitepaper.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Whitepaper
          </a>
        </li>
      </ul>
    </nav>
  );
};
