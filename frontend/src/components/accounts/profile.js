import React from "react";
import Card from "react-bootstrap/Card";
function Profile(props) {
  return (
    <div>
      {/* <h1>Your Details</h1> 
      <h2> Id : {props.id}</h2>
      <h2>First Name : {props.first_name}</h2>
      <h2>Last Name : {props.last_name}</h2>
      <h2>UserName : {props.username}</h2>
      <h2>Email : {props.email}</h2> */}
      <Card
        style={{
          width: "50rem",
          padding: "5px",
          borderColor: "black",
          borderWidth: "4px",
          marginBlock: "15px",
          backgroundColor: "#D5ADCF",
          fontSize: "30px",
        }}
      >
        <Card.Body> 
          <Card.Title style={{ fontSize : "40px"}}>Your Details</Card.Title>
          <Card.Text>First Name : {props.first_name}</Card.Text>
          <Card.Text>First Name : {props.first_name}</Card.Text>
          <Card.Text>Last Name : {props.last_name}</Card.Text>
          <Card.Text>username : {props.username}</Card.Text>
          <Card.Text>Email : {props.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
