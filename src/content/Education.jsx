import { HashScroll } from "react-hash-scroll";
import "../styles/Education.scss";

export const Education = () => {
  return (
    <HashScroll hash="education">
      <article id="education">
        <h5>Education</h5>
        <h1>Frequently Asked Questions</h1>
        <div className="row">
          <ul>
            <li>
              <strong>Question...</strong>Answer
            </li>
            <li>
              <strong>Question...</strong>Answer
            </li>
            <li>
              <strong>Question...</strong>Answer
            </li>
          </ul>
          <ul>
            <li>
              <strong>Question...</strong>Answer
            </li>
            <li>
              <strong>Question...</strong>Answer
            </li>
            <li>
              <strong>Question...</strong>Answer
            </li>
          </ul>
        </div>
      </article>
    </HashScroll>
  );
};
