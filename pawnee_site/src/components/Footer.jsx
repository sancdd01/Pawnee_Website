import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <div className="footer-div">
      <Nav className="footer-links" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">site map</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">administration</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">disclaimer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">submit feedback</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">back to top</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="footer-text">
        <p>Copyright 2014 City of Pawnee, All rights reserved Privacy Policy</p>
      </div>
    </div>
  );
}
