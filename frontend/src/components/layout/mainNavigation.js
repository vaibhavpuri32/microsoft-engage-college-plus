import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
function MainNavigation() {
  return (
    // <Navbar>
    //   <ul><Link to="/">All Events</Link></ul>
    //   <ul> <Link to="/new">Create a New Event</Link> </ul>
    // </Navbar>

    <Navbar bg="primary" varient="light">
      <Container>
        <Navbar.Brand>Events Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              All Events
            </Nav.Link>
            <Nav.Link as={Link} to="/new">
              Create New Event
            </Nav.Link> 
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNavigation;
