import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FolderIcon,
  WindowsLogo,
  ContactIcon,
  AboutIcon,
} from "../../assets/DesktopIcons/index";

//Style
import "./NavDesk.scss";

const NavDesk = () => {
  const [showName, setShowName] = useState();

  return (
    <div className="nav">
      {" "}
      <Link to="/">
        <div className="d-flex justify-content-center align-items-center flex-column">
          {showName && <p>Home</p>}
          <img
            src={WindowsLogo}
            alt="windosLogo"
            onMouseEnter={() => setShowName(true)}
            onMouseLeave={() => setShowName(false)}
          />
        </div>
      </Link>
      <Link to="/aboutme">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={AboutIcon} alt="" />
          <p>About me</p>
        </div>
      </Link>
      <Link to="/projects">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={FolderIcon} alt="" />
          <p>Projects</p>
        </div>
      </Link>
      <Link to="/contact">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={ContactIcon} alt="" />
          <p>Contact</p>
        </div>
      </Link>
    </div>
  );
};

export default NavDesk;
