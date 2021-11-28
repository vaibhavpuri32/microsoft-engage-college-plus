import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { convertDateFormat, makePostRequest } from "../../utils";
import { useNavigate } from "react-router"; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function NewAssignment(props) {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  async function handleSubmit(e) {
    e.preventDefault();
    const assignmentData = {
      title: title,
      description: description,
      deadline: new Date(convertDateFormat(deadline)),
      author: props.userId,
    };
    await makePostRequest(
      "http://127.0.0.1:8000/assignments/assignment/",
      JSON.stringify(assignmentData)
    );
    history("/assignments");
  }
  return (
    <div>
      <h1>Add a new Assignment</h1>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label>Deadline </label>
          <DateTimePicker onChange={setDeadline} value={deadline} />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            required
            id="description"
            type="textArea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button>SUBMIT</button>
      </form> */}

       <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" required id="title" type="text">
          <Form.Label>Title</Form.Label>
          <Form.Control
            on
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>


        <Form.Group
          className="mb-3"
          required
          id="deadline"
          value={deadline}
          label="Deadline"
        >
          <DateTimePicker onChange={setDeadline} value={deadline} />
          <Form.Label>Deadline</Form.Label>
        </Form.Group>

        <Form.Group
          className="mb-3"
          required
          id="description"
          type="text"
          label="Description"
        >
          <Form.Label>Description</Form.Label>
          <Form.Control
            on
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
    </div>
  );
}
