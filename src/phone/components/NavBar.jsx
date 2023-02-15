import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineHome,
  AiFillContacts,
  AiOutlineContacts,
} from "react-icons/ai";
import { BsPerson, BsFillPersonFill } from "react-icons/bs";
import "./NavBar.scss";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [aboutmeClicked, setAboutmeClicked] = useState(false);
  const [projectClicked, setProjectClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  const isActive = (event) => {
    if (event.target.closest("a").classList.contains("active")) {
      setClicked(!clicked);
      setAboutmeClicked(false);
      setProjectClicked(false);
      setContactClicked(false);
    }
  };
  const aboutIsActive = (event) => {
    if (event.target.closest("a").classList.contains("active")) {
      setClicked(false);
      setAboutmeClicked(!aboutmeClicked);
      setProjectClicked(false);
      setContactClicked(false);
    }
  };
  const projectIsActive = (event) => {
    if (event.target.closest("a").classList.contains("active")) {
      setClicked(false);
      setAboutmeClicked(false);
      setProjectClicked(!projectClicked);
      setContactClicked(false);
    }
  };
  const contactIsActive = (event) => {
    if (event.target.closest("a").classList.contains("active")) {
      setClicked(false);
      setAboutmeClicked(false);
      setProjectClicked(false);
      setContactClicked(!contactClicked);
    }
  };
  return (
    <div className="d-flex justify-content-around">
      <div className="navbar-item d-flex justify-content-center align-items-center">
        <NavLink to="/">
          <button
            className={`btn ${
              clicked && !aboutmeClicked && !projectClicked && !contactClicked
                ? "btn-info"
                : "btn-primary"
            }`}
            onClick={(e) => isActive(e)}
          >
            {clicked ? <AiFillHome /> : <AiOutlineHome />}

            <p className="">Home</p>
          </button>
        </NavLink>
      </div>
      <div className="navbar-item text-center">
        <NavLink to="/aboutme">
          <button
            className={`btn ${
              !clicked && aboutmeClicked && !projectClicked && !contactClicked
                ? "btn-info"
                : "btn-primary"
            }`}
            onClick={(e) => aboutIsActive(e)}
          >
            {!aboutmeClicked && <BsPerson />}
            {aboutmeClicked && <BsFillPersonFill />}
            <p className="">ME</p>
          </button>
        </NavLink>
      </div>
      <div className="navbar-item d-flex justify-content-center align-items-center">
        <NavLink to="/projects">
          <button
            className={`btn ${
              !clicked && !aboutmeClicked && projectClicked && !contactClicked
                ? "btn-info"
                : "btn-primary"
            }`}
            onClick={(e) => projectIsActive(e)}
          >
            <i className="fa-solid fa-diagram-project"></i>
            <p className="">Projects</p>
          </button>
        </NavLink>
      </div>
      <div className="navbar-item d-flex justify-content-center align-items-center">
        <NavLink to="/contact">
          <button
            className={`btn ${
              !clicked && !aboutmeClicked && !projectClicked && contactClicked
                ? "btn-info"
                : "btn-primary"
            }`}
            onClick={(e) => contactIsActive(e)}
          >
            {contactClicked ? <AiFillContacts /> : <AiOutlineContacts />}
            <p className="">Contact</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
