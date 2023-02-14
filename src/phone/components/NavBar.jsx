import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import "./NavBar.scss";
import { click } from "@testing-library/user-event/dist/click";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const isActive = (event) => {
    if (event.target.closest("a").classList.contains("active")) {
      setClicked(!clicked);
    }
  };

  return (
    <div className="d-flex justify-content-around">
      <div className="navbar-item d-flex justify-content-center align-items-center">
        <NavLink to="/">
          <button className="btn btn-primary p-3" onClick={(e) => isActive(e)}>
            {clicked && <AiFillHome />}
            {!clicked && <AiOutlineHome />}
            <p className="">Home</p>
          </button>
        </NavLink>
      </div>
      <div className="navbar-item d-flex justify-content-center align-items-center">
        <NavLink to="/aboutme">
          <button className="btn btn-primary p-3">
            <p className="">About me</p>
          </button>
        </NavLink>
      </div>
      <div className="navbar-item d-flex justify-content-center align-items-center">
        <NavLink to="/projects">
          <button className="btn btn-primary p-3">
            <i className="fa-solid fa-diagram-project"></i>
            <p className="">Projects</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
