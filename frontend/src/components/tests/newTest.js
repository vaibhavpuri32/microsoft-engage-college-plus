import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import {
  makeGetRequest,
  makePostRequest,
  convertDateFormat,
} from "../../utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function NewTestPage(props) {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [start_time, setStartTime] = useState(new Date());
  const [end_time, setEndTime] = useState(new Date());

  async function handleSubmit(e) {
    e.preventDefault();
    const testData = {
      title: title,
      start_time: new Date(convertDateFormat(start_time)),
      end_time: new Date(convertDateFormat(end_time)),
      created_by: props.userId,
    };
    await makePostRequest(
      "http://127.0.0.1:8000/mcq/test/",
      JSON.stringify(testData)
    );
    toast.success("You have Created an test");
    history("/tests");
  }

  return (
    <Row>
      <Col md={6}>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" required id="name" type="text">
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
