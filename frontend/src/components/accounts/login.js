import { useState } from "react";
import React from "react";
import { makePostRequest, makeGetRequest } from "../../utils";
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    console.log(userData);
    const responseData = await makePostRequest(
      "http://127.0.0.1:8000/accounts/login/",
      JSON.stringify(userData)
    );
    const data = await responseData.json();
    localStorage.setItem("token", data["token"]);
    // console.log("Response" , data)
    props.getUserInformation();
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
export default Login;
