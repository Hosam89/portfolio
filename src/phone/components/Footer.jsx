import { GitHubLogo, LinkedInLogo } from "../../assets/LOGOS/index";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center gap-4">
      <a href="https://github.com/Hosam89" target={"_blank"} rel="noreferrer">
        <div>
          <img src={GitHubLogo} alt="" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/feed/"
        target={"_blank"}
        rel="noreferrer"
      >
        <div>
          <img src={LinkedInLogo} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Footer;
