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
        <li>
          <Link to="/#rewards" onClick={handleClick}>
            Rewards
          </Link>
        </li>
        <li>
          <Link to="/#whitepaper" onClick={handleClick}>
            Whitepaper
          </Link>
        </li>
        <li>
          <Link to="/#tokenomics" onClick={handleClick}>
            Tokenomics
          </Link>
        </li>
        <li>
          <Link to="/#security" onClick={handleClick}>
            Security
          </Link>
        </li>
        <li>
          <Link to="/#recovery" onClick={handleClick}>
            Recovery
          </Link>
        </li>
        {/* <li>
          <Link to="/#education" onClick={handleClick}>
            Education
          </Link>
        </li> */}
        <li className="hide">
          <Link to="/#contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
