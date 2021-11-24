import React from "react";

function Profile(props) {
  return (
    <div>
      <h1>Your Details</h1> 
      <h2>{props.id}</h2>
      <h2>{props.first_name}</h2>
      <h2>{props.last_name}</h2>
      <h2>{props.username}</h2>
      <h2>{props.email}</h2>
    </div>
  );
}

export default Profile;
