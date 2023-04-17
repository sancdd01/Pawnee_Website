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
      <div className="nav-links">
        <Navbar collapseOnSelect bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div id="hello_user">
        <span>Hi {user && user.first_name} !</span>
        <button onClick={() => logOut(setNewUser)}>Log Out</button>
      </div>
    </div>
  );
}
