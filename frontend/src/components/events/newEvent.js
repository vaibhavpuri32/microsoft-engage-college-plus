import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { makePostRequest } from "../../utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getdateinISO, convertDateFormat } from "../../utils";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function NewEventForm(props) {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [start_time, setStartTime] = useState(new Date());
  const [end_time, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const eventData = {
      name: name,
      start_time: new Date(convertDateFormat(start_time)),
      end_time: new Date(convertDateFormat(end_time)),
      description: description,
      created_by: props.userId,
    };
    await makePostRequest(
      "http://127.0.0.1:8000/events/",
      JSON.stringify(eventData)
    );
    toast.success("You have Created an event");
    history("/");
  }
  return (
    <div>
      <h1>Add a new Event</h1>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" required id="name" type="text">
              <Form.Label>Name</Form.Label>
              <Form.Control
                on
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              required
              id="start-time"
              value={start_time}
              label="Start Time"
            >
              {" "}
              <Form.Label>Start Time</Form.Label> <br />
              <DateTimePicker
                className="w-100"
                onChange={setStartTime}
                value={start_time}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              required
              id="end-time"
              value={end_time}
              label="End Time"
            >
              <Form.Label>End Time</Form.Label> <br />
              <DateTimePicker
                className="w-100"
                onChange={setEndTime}
                value={end_time}
              />
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

export default NewEventForm;
