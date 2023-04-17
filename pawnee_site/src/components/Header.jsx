import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <div>
      <NavBar>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#">Department</Nav.Link>
        <Nav.Link href="#">Sign Up</Nav.Link>
      </NavBar>
    </div>
  );
}
