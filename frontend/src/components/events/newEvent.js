import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { makePostRequest } from "../../utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getdateinISO,convertDateFormat } from "../../utils";

function NewEventForm(props) {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [start_time, setStartTime] = useState(new Date());
  const [end_time, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let k1 = start_time.toISOString();
    const eventData = {
      name: name,
      start_time: new Date(convertDateFormat(start_time)),
      end_time: new Date(convertDateFormat(end_time)),
      description: description,
      created_by: props.userId,
    };
    //console.log(eventData)
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

export default NewEventForm;
