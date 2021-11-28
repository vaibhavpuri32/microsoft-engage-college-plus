import { useState, useRef } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function SignUp() {
  const history = useNavigate();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isTeacherRef = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const is_teacher = isTeacherRef.current.checked;
    const userData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: username,
      password: password,
      is_teacher: is_teacher,
    };
    fetch("http://127.0.0.1:8000/accounts/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Your Account has been created !");
    history("/login");
  }
  return (
    <div>
      <h1>Enter Your Details</h1>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First name : </label>
          <input
            type="text"
            required
            id="firstname"
            onChange={(e) => setFirstName(e.target.value)}
            value={first_name}
          />
        </div>

        <div>
          <label htmlFor="lastname">Last name : </label>
          <input
            required
            id="lastname"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={last_name}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            required
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            required
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            required
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <h5>I am a teacher </h5>
          <input type="checkbox" id="is_teacher" ref={isTeacherRef} />
        </div>
        <button>SUBMIT</button>
      </form> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3"
          required
          id="firstname"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={first_name}
          label="First Name "
        >
          <Form.Label>First Name</Form.Label>
          <Form.Control on placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          required
          id="lastname"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={last_name}
          label="Last Name "
        >
          <Form.Label>Last Name</Form.Label>
          <Form.Control on placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          required
          id="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="E-Mail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control on placeholder="Enter Email" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          required
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          label="USERNAME"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control on placeholder="Enter username" />
        </Form.Group>

        <Form.Group
          className="mb-3"
          required
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" ref={isTeacherRef} label="I am a Teacher" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default SignUp;
