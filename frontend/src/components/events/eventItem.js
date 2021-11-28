import React from "react";
import Card from "react-bootstrap/Card";
import { alignPropType } from "react-bootstrap/esm/types";
import { useNavigate } from "react-router-dom";
import { makeDeleteRequest, makeGetRequest } from "../../utils";
export default function EventItem(props) {
  const history = useNavigate();
  return (
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
        <Card.Title style={{fontSize: "40px"}}>{props.event.name}</Card.Title>
        <Card.Text>
          {props.event.start_time} to {props.event.end_time}
        </Card.Text>
        <Card.Text>Description - {props.event.description}</Card.Text>
        <Card.Text>Created by : {props.event.created_by}</Card.Text>
        {props.userId === props.event.created_by && (
          <button
            color="#008000"
            onClick={() => {
              history("/edit-event/" + props.event.id + "/");
            }}
          >
            Edit
          </button>
        )}
        {props.userId === props.event.created_by && (
          <button
            onClick={() => {
              makeDeleteRequest(
                "http://127.0.0.1:8000/events/" + props.event.id
              );
              props.setLoadedEvents((oldList) =>
                oldList.filter((item) => item.id !== props.event.id)
              );
            }}
          >
            Delete
          </button>
        )}
      </Card.Body>
    </Card>
  );
}
