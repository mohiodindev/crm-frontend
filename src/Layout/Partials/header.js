import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../Assests/images/logo.png";

export function Header() {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand >
        <img src={logo} width="50px" alt="crm-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
