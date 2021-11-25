import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { makeGetRequest, makePutRequest, getdateinISO } from "../../utils";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function EditAssignmentPage(props) {
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  let { id } = useParams();
  useEffect(async () => {
    const response = await makeGetRequest(
      "http://127.0.0.1:8000/assignments/assignment/" + id
    ).then((r) => r.json());
    setTitle(response["title"]);
    setDeadline(new Date(getdateinISO(response["deadline"])));
    setDescription(response["description"]);
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    let author = props.userId;
    //console.log("deadline is : "+ deadline)
    let assignment = { id, deadline, description, author };
    await makePutRequest(
      "http://127.0.0.1:8000/assignments/assignment/" + id + "/",
      JSON.stringify(assignment)
    );
    history("/assignment");
  }
  return (
    <div>
      <h1>Edit Assignment</h1>
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
      </form>
    </div>
  );
}
