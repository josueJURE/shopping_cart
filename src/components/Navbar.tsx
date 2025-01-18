
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/store">
            Store
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
