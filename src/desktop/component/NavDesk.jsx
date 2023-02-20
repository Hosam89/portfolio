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
  const [showName, setShowName] = useState(true);
  const showSpanOnOver = (event) => {
    event.target.previousElementSibling.style.opacity = 1;
  };
  const hidddSpanOnOver = (event) => {
    event.target.previousElementSibling.style.opacity = 0;
  };
  return (
    <div className="nav">
      <div className="wrapper d-flex justify-content-center align-items-center">
        {" "}
        <Link to="/">
          <div className="card d-flex justify-content-center align-items-center flex-column gap-2 ">
            <span>Home</span>
            <img
              src={WindowsLogo}
              alt="windosLogo"
              onMouseEnter={(e) => showSpanOnOver(e)}
              onMouseLeave={(e) => hidddSpanOnOver(e)}
            />
          </div>
        </Link>
        <Link to="/aboutme">
          <div className="card d-flex justify-content-center align-items-center flex-column gap-2">
            <span>About ME</span>
            <img
              src={AboutIcon}
              alt=""
              onMouseEnter={(e) => showSpanOnOver(e)}
              onMouseLeave={(e) => hidddSpanOnOver(e)}
            />
          </div>
        </Link>
        <Link to="/projects">
          <div className="card d-flex justify-content-center align-items-center flex-column gap-2">
            <span>Projects ME</span>
            <img
              src={FolderIcon}
              alt=""
              onMouseEnter={(e) => showSpanOnOver(e)}
              onMouseLeave={(e) => hidddSpanOnOver(e)}
            />
          </div>
        </Link>
        <Link to="/contact">
          <div className="card d-flex justify-content-center align-items-center flex-column gap-2">
            <span>Contact</span>
            <img
              src={ContactIcon}
              alt=""
              onMouseEnter={(e) => showSpanOnOver(e)}
              onMouseLeave={(e) => hidddSpanOnOver(e)}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavDesk;
