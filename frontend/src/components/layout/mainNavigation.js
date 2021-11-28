import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
function MainNavigation(props) {
  return (
    <Navbar style={{ backgroundColor: "#D5ADCF", marginBottom: "25px" }}>
      <Container>
        <Navbar.Brand>College Plus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.userId != "" && (
              <Nav.Link as={Link} to="/">
                Events
              </Nav.Link>
            )}

            {props.userId != "" && (
              <Nav.Link as={Link} to="/assignments">
                Assignments
              </Nav.Link>
            )}
            {props.isTeacher && (
              <Nav.Link as={Link} to="/tests">
                Tests
              </Nav.Link>
            )}
            {props.userId != "" && (
              <Nav.Link as={Link} to="/new-event">
                Create a New Event
              </Nav.Link>
            )}
            {props.isTeacher && (
              <Nav.Link as={Link} to="/new-assignment">
                Create a new assignment
              </Nav.Link>
            )}
            {props.isTeacher && (
              <Nav.Link as={Link} to="/new-test">
                Create a new Test
              </Nav.Link>
            )}
            {props.userId == "" && (
              <Nav.Link as={Link} to="/signup">
                Signup
              </Nav.Link>
            )}
            {props.userId == "" && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {props.userId != "" && (
              <Nav.Link as={Link} to="/me">
                {props.username}
              </Nav.Link>
            )}

            {props.userId != "" && (
              <Nav.Link as={Link} to="/logout">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNavigation;
