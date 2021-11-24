import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
export default function EventItem(props) {
  const history = useNavigate();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.event.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.event.start_time} - {props.event.end_time}
        </Card.Subtitle>
        <Card.Text>Description - {props.event.description}</Card.Text>
        <Card.Text>Created by : {props.event.created_by}</Card.Text>
        {props.userId === props.event.created_by &&
          (console.log("Over Here\n"),
          (
            <button
              onClick={() => {
                history("/edit/" + props.event.id + "/");
              }}
            >
              Edit
            </button>
          ))}
      </Card.Body>
    </Card>
  );
}
