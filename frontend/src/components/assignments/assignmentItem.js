import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { makeDeleteRequest, makeGetRequest } from "../../utils";
import NewSubmissionPage from "../submissions/newSubmission";
export default function AssignmentItem(props) {
  const history = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.assignment.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Deadline : {props.assignment.deadline}
        </Card.Subtitle>
        <Card.Text>Description - {props.assignment.description}</Card.Text>
        <Card.Text>Created by : {props.assignment.author}</Card.Text>
        {props.userId === props.assignment.author && (
          <button
            color="#008000"
            onClick={() => {
              history("/edit-assignment/" + props.assignment.id + "/");
            }}
          >
            Edit
          </button>
        )}
        {props.userId === props.assignment.author && (
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
        )}
      </Card.Body>
    </Card>
  );
}
