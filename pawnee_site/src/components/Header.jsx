import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import { currUser, logOut } from "../utilities";
import { getToken } from "./CsrfToken";

export default function Header() {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(false);
  getToken();

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, [newUser]);

  return (
    <div className="nav">
      <Container className="nav-links" id="contains">
        <Navbar id="fix-nav" collapseOnSelect bg="dark" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src="/images/city_seal.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="city-seal"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home" id="brand">
            CITY OF PAWNEE
          </Navbar.Brand>

          <Nav.Link href="/">Home </Nav.Link>
          <Nav.Link href="#link">About </Nav.Link>
          <Nav.Link href="#/signin">Media </Nav.Link>
          <Nav.Link href="#/department">Department </Nav.Link>
          <Nav.Link href="#/workorders">Work Orders </Nav.Link>
          <Nav.Link href="#/signup">Sign Up</Nav.Link>
          <Nav.Link href="#/signin">Log In</Nav.Link>
        </Navbar>
      </Container>

      <div id="hello_user">
        <span>Hi {user && user.first_name} !</span>
        <button onClick={() => logOut(setNewUser)}>Log Out</button>
      </div>
    </div>
  );
}
