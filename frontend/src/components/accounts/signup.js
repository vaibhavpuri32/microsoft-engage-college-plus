import { useState,useRef } from "react";
import React from "react";
function SignUp() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastTime] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isTeacherRef = useRef()
  function handleSubmit(event) {
    event.preventDefault(); 
    const is_teacher = isTeacherRef.current.value
    const userData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: username,
      password: password,
      is_teacher: is_teacher
    };
    console.log(userData)
    fetch("http://127.0.0.1:8000/accounts/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div>
      <h1>Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={first_name}
          />
        </div>

        <div>
          <input
            type="text"
            onChange={(e) => setLastTime(e.target.value)}
            value={last_name}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <h5>I am a teacher </h5>
          <input type="checkbox" required id="is_teacher" ref={isTeacherRef} />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
export default SignUp;
