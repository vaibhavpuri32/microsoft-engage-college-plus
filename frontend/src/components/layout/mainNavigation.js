import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
function MainNavigation(props) {
  return (
    <Navbar bg="primary" varient="light">
      <Container>
        <Navbar.Brand>College Plus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              All Events
            </Nav.Link>
            <Nav.Link as={Link} to="/new-event">
              Create a new event
            </Nav.Link> 
            <Nav.Link as={Link} to="/new-assignment">
              Create a new assignment
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/me">
              Profile
            </Nav.Link>  
            <Nav.Link as={Link} to="/assignment">
              Assignments
            </Nav.Link>
            <Nav.Link as={Link} to="/logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNavigation;
