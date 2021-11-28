import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { makeDeleteRequest, makeGetRequest } from "../../utils";
export default function TestItem(props) {
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
      <Card.Body >
        <Card.Title style = {{fontSize: "40px"}} >{props.test.title}</Card.Title>
        <Card.Text>Start Time : {props.test.end_time}</Card.Text>
        <Card.Text>End Time : {props.test.end_time}</Card.Text>
        <Card.Text>Created by : {props.test.created_by}</Card.Text>
        {props.userId === props.test.created_by && (
          <button
            color="#008000"
            onClick={() => {
              history("/add-question/" + props.test.id + "/");
            }}
          >
            Add Questions
          </button>
        )}
        {(props.isTeacher == false) && (
          <button
            color="#008000"
            onClick={() => {
              history("/attempt-test/" + props.test.id + "/");
            }}
          >
            Attempt Test
          </button>
        )}
        {/* {props.userId === props.assignment.author && (
            <button
              onClick={() => {
                makeDeleteRequest(
                  "http://127.0.0.1:8000/assignments/assignment/" +
                    props.assignment.id + "/"
                );
                props.setLoadedAssignments((oldList) =>
                  oldList.filter((item) => item.id !== props.assignment.id)
                );
              }}
            >
              Delete
            </button>
          )}
          {props.isTeacher == false && (
            <button
              onClick={() => history("/new-submission/" + props.assignment.id + "/")}
            >
              Submit
            </button>
          )} 
          {props.userId === props.assignment.author && (
            <button
              onClick={() => history("/all-submissions/" + props.assignment.id + "/")}
            >
              View Submissions
            </button>
          )} */}
      </Card.Body>
    </Card>
  );
}
