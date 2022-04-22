import { FaStackOverflow, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Connect = () => {
  return (
    <ul className="social-icon ">
      <li>
        <a
          className="stackoverflow"
          href="https://stackoverflow.com/users/9266400/mustkeem-k"
          target="_blank"
          rel="noreferrer"
        >
          <FaStackOverflow />
        </a>
      </li>
      <li>
        <a
          className="github"
          href="https://github.com/mustkem"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a
          className="twitter"
          href="https://twitter.com/must_keem"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter />
        </a>
      </li>
      <li>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/mustkeem-k-62a37271/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  );
};

export default Connect;
