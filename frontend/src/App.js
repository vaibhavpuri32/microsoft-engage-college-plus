import React, { useState } from "react";
import AllEventsPage from "./components/events/allEvents";
import NewEventForm from "./components/events/newEvent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import SignUp from "./components/accounts/signup";
import Login from "./components/accounts/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeGetRequest } from "./utils";
import Profile from "./components/accounts/profile";
import EditEventPage from "./components/events/editEvent";
import Logout from "./components/accounts/logout";

function App() {
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  async function getUserInformation() {
    const responseData = await makeGetRequest(
      "http://127.0.0.1:8000/accounts/me/"
    );

    const data = await responseData.json();
    console.log(data)
    setFirstName(data["first_name"]);
    setLastName(data["last_name"]);
    setUsername(data["username"]);
    setEmail(data["email"]);
    setId(data["id"]);
  }  
  
  return (
    <BrowserRouter>
      <Layout username={username}>
        <Routes>
          <Route path="/" element={<AllEventsPage userId = {id} />} />
          <Route path="/new" element={< NewEventForm userId ={id} />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/login"
            element={<Login getUserInformation={getUserInformation} />}
          />
          <Route
            path="/me"
            element={
              <Profile
                username={username}
                first_name={firstName}
                last_name={lastName}
                email={email}
                id = {id}
              />
            }
          /> 
          <Route path="/edit/:id" element={<EditEventPage  userId ={id}  />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
