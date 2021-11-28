import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import {
  makeGetRequest,
  makePutRequest,
  getdateinISO,
  convertDateFormat,
} from "../../utils";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function EditAssignmentPage(props) {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [description, setDescription] = useState("");
  let { id } = useParams();
  useEffect(async () => {
    const response = await makeGetRequest(
      "http://127.0.0.1:8000/assignments/assignment/" + id + "/"
    ).then((r) => r.json());
    setTitle(response["title"]);
    setDeadline(new Date(getdateinISO(response["deadline"])));
    setDescription(response["description"]);
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    let author = props.userId;
    let assignment = {
      id,
      title,
      deadline: new Date(convertDateFormat(deadline)),
      description,
      author,
    };
    await makePutRequest(
      "http://127.0.0.1:8000/assignments/assignment/" + id + "/",
      JSON.stringify(assignment)
    );
    history("/assignments");
  }
  return (
    <div>
      <h1>Edit Assignment</h1>
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
          <label> Deadline: </label>
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
