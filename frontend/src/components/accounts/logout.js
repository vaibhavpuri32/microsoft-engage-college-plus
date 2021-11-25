import React, { useEffect } from "react";
import { Link } from "react-router-dom"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Logout(props) {
  function loginPage() {
    props.resetUser();
    localStorage.removeItem("token"); 
    toast("Logged out Successfully")
    console.log("Logout Button Clicked");
  }
  useEffect(() => {
    loginPage();
  }, []);
  return (
    <div>
      <h1>
        You Have been logged out, <Link to="/login"> Click Here </Link> to Login
      </h1>
    </div>
  );
}
