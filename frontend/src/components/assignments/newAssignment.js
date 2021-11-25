import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { makePostRequest } from "../../utils";
import { useNavigate } from "react-router";
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
      deadline: deadline,
      author: props.userId,
    };
    await makePostRequest(
      "http://127.0.0.1:8000/assignments/assignment/",
      JSON.stringify(assignmentData)
    );
    history("/assignment");
  }
  return (
    <div>
      <h1>Add a new Assignment</h1>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}
