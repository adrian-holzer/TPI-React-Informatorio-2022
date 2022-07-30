import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Buscador de Noticias
            </Link>
           
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
