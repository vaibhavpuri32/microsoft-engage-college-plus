import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { convertDateFormat, makePostRequest } from "../../utils";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import { toast } from "react-toastify";
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
    toast.success("You have Created an Assignment");
    history("/assignments");
  }
  return (
    <div>
      <h1>Add a new Assignment</h1>
      <Row>
        <Col md={6}>
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
              className="w-100"
              id="deadline"
              value={deadline}
              label="Deadline"
            >
              <DateTimePicker onChange={setDeadline} className="w-100" value={deadline} />
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
        </Col>
      </Row>
    </div>
  );
}
