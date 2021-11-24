import React, { useEffect } from "react";
import { useNavigate } from "react-router";
export default function Logout() {
  function loginPage() {
    localStorage.removeItem("token");
    console.log("Logout Button Clicked")
  }
  return (
    <div>
      <h1 onClick={loginPage}>You Have been logged out, Click Here to Login</h1>
    </div>
  );
}
