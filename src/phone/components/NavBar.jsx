import { NavLink } from "react-router-dom";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="d-flex justify-content-around">
      <div>
        <NavLink to="/">
          <button className="btn" type="checkbox">
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/aboutme">
          <button className="btn" type="checkbox">
            <i className="fa-solid fa-user"></i>
            <p>About me</p>
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/projects">
          <button className="btn" type="checkbox">
            <i className="fa-solid fa-diagram-project"></i>
            <p>Projects</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
