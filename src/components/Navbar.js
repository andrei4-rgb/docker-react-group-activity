import React from "react";
import { Navbar as BsNavbar, Container } from "react-bootstrap";

function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark">
      <Container>
        <BsNavbar.Brand href="#"> Task Manager</BsNavbar.Brand>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
