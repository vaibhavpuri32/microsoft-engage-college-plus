import React from "react";
import AllEventsPage from "./components/events/allEvents";
import NewEventForm from "./components/events/newEvent";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";
import SignUp from "./components/accounts/signup";    
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllEventsPage />} />
          <Route path="/new" element={<NewEventForm />} /> 
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;