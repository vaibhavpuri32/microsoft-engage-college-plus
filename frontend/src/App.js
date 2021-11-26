import React, { useState, useEffect } from "react";
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
import { getOverlayDirection } from "react-bootstrap/esm/helpers";
import NewAssignment from "./components/assignments/newAssignment";
import AllAssignmentsPage from "./components/assignments/allAssignments";
import EditAssignmentPage from "./components/assignments/editAssignment";
import NewSubmissionPage from "./components/submissions/newSubmission";
import AllSubmissionsPage from "./components/submissions/allSubmissions";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isTeacher, setisTeacher] = useState(false);

  async function getUserInformation() {
    const responseData = await makeGetRequest(
      "http://127.0.0.1:8000/accounts/me/"
    );
    const data = await responseData.json();
    console.log(data);
    setFirstName(data["first_name"]);
    setLastName(data["last_name"]);
    setUsername(data["username"]);
    setEmail(data["email"]);
    setId(data["id"]);
    setisTeacher(data["is_teacher"]);
  }

  useEffect(() => {
    getUserInformation();
  }, []);

  function resetUser() {
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setId("");
    setisTeacher(false);
  }

  return (
    <BrowserRouter>
      <Layout username={username}>
        <Routes>
          <Route path="/" element={<AllEventsPage userId={id} />} />
          <Route path="/new-event" element={<NewEventForm userId={id} />} /> 
          <Route path="/submissions" element={<AllSubmissionsPage userId={id} />} />
          <Route
            path="/new-assignment"
            element={<NewAssignment userId={id} />}
          />
          <Route
            path="/assignment"
            element={<AllAssignmentsPage userId={id} isTeacher={isTeacher}/>}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout resetUser={resetUser} />} />
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
                id={id}
                isTeacher={isTeacher}
              />
            }
          />
          <Route
            path="/edit-event/:id"
            element={<EditEventPage userId={id} />}
          />
          <Route
            path="/edit-assignment/:id"
            element={<EditAssignmentPage userId={id} />}
          />
          <Route
            path="/new-submission/:id"
            element={<NewSubmissionPage userId={id} />}
          /> 
          <Route
            path="/all-submissions/:id"
            element={<AllSubmissionsPage userId={id} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
