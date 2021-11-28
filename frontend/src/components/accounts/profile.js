import React from "react";

function Profile(props) {
  return (
    <div>
      <h1>Your Details</h1> 
      <h2> Id : {props.id}</h2>
      <h2>First Name : {props.first_name}</h2>
      <h2>Last Name : {props.last_name}</h2>
      <h2>UserName : {props.username}</h2>
      <h2>Email : {props.email}</h2>
    </div>
  );
}

export default Profile;
