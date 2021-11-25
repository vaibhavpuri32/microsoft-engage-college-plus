import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { makeGetRequest, makePutRequest, getdateinISO } from "../../utils"; 
import {toast} from "react-toastify";
// import  input from "react-bootstrap/esm/input";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
export default function EditEventPage(props) {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
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
    let event = { id, name, start_time, end_time, description, created_by };
    await makePutRequest(
      "http://127.0.0.1:8000/events/" + id,
      JSON.stringify(event)
    ); 
    toast.success("You have edited the event")
    history("/");
  }
  return (
    <div>
      <h1>Add a new Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Start Time: </label>
          <DateTimePicker onChange={setStartTime} value={start_time} />
        </div>
        <div>
          <label>End Time: </label>
          <DateTimePicker onChange={setEndTime} value={end_time} />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            requiredid="description"
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
