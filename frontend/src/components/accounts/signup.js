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
    const is_teacher = isTeacherRef.current.checked
    const userData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: username,
      password: password,
      is_teacher: is_teacher
    };
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
        <label htmlFor="firstname" >First name : </label>
          <input
            type="text" required id ="firstname"
            onChange={(e) => setFirstName(e.target.value)}
            value={first_name}
          />
        </div>

        <div> 
        <label htmlFor="lastname" >Last name : </label>
          <input required id = "lastname"
            type="text"
            onChange={(e) => setLastTime(e.target.value)}
            value={last_name}
          />
        </div>
        <div> 
        <label htmlFor="email" >E-mail: </label>
          <input required id = "email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div> 
        <label htmlFor="username" >Username: </label>
          <input
            type="text" required id = "username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div> 
        <label htmlFor="password" >Password: </label>
          <input
            type="password" required id = "password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <h5>I am a teacher </h5>
          <input type="checkbox" id="is_teacher" ref={isTeacherRef} />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
export default SignUp;
