import { GitHubLogo, LinkedInLogo } from "../../assets/LOGOS/index";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center gap-4">
      <div>
        <img src={GitHubLogo} alt="" />
      </div>
      <div>
        <img src={LinkedInLogo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
