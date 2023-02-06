import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="overflow-hidden">
          <Nav
            className="ms-auto  my-lg-0 Navbartext "
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            {/*  A link to the Home Page  */}
            <Nav.Link>
              <NavLink to="/">Home </NavLink>
            </Nav.Link>
            {/* A link to the Projects Page  */}
            <Nav.Link>
              <NavLink to="/projects">Projects </NavLink>
            </Nav.Link>
            <Nav.Link>
              {/* A link to the about me Page  */}

              <NavLink to="/aboutme">AboutMe</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
