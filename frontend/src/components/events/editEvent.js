import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  makeGetRequest,
  makePutRequest,
  getdateinISO,
  convertDateFormat,
} from "../../utils";
import { toast } from "react-toastify";
// import  input from "react-bootstrap/esm/input";
import { useParams } from "react-router";
import { useNavigate } from "react-router"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";
export default function EditEventPage(props) {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [start_time, setStartTime] = useState(new Date());
  const [end_time, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");
  let { id } = useParams();
  useEffect(async () => {
    const response = await makeGetRequest(
      "http://127.0.0.1:8000/events/" + id
    ).then((r) => r.json());
    setName(response["name"]);
    setStartTime(new Date(getdateinISO(response["start_time"])));
    setEndTime(new Date(getdateinISO(response["end_time"])));
    setDescription(response["description"]);
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    let created_by = props.userId;
    let event = {
      id,
      name,
      start_time: new Date(convertDateFormat(start_time)),
      end_time: new Date(convertDateFormat(end_time)),
      description,
      created_by,
    };
    await makePutRequest(
      "http://127.0.0.1:8000/events/" + id,
      JSON.stringify(event)
    );
    toast.success("You have edited the event");
    history("/");
  }
  return (
    <div>
      <h1>Edit Event</h1>
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
