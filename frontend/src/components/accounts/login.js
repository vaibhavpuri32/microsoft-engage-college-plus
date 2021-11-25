import { useState } from "react";
import React from "react";
import { makePostRequest } from "../../utils";
import { useNavigate } from "react-router"; 
import { ToastContainer, toast } from "react-toastify";
function Login(props) {  
  const history = useNavigate() 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(event) {
    localStorage.removeItem("token");
    event.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    const responseData = await makePostRequest(
      "http://127.0.0.1:8000/accounts/login/",
      JSON.stringify(userData)
    );
    const data = await responseData.json();
    localStorage.setItem("token", data["token"]);
    props.getUserInformation();
    toast.success("Logged in Successfully");
    history("/");
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" >Username : </label>
          <input required id = "username"
            type="text" 
            onChange={(e) => setUsername(e.target.value)}
            value={username} label="USERNAME"
          />
        </div>
        <div> 
        <label htmlFor="password"> Password : </label>
          <input required id = "password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
export default Login;
