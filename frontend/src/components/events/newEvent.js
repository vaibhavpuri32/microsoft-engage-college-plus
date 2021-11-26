import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { makePostRequest } from "../../utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getdateinISO } from "../../utils";
function convertTZ(date, tzString) {
  return new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: tzString,
    })
  );
}
function NewEventForm(props) {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [start_time, setStartTime] = useState(new Date());
  const [end_time, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    //let k1 = start_time.toISOString();
    // 2012-04-20T10:10:30.000Z
    //"2012/04/20 10:10:30 +0000"
    //"2021/11/26 20:16:00 +0000"
    // const year = k1.substring(0, 4);
    // const month = k1.substring(5, 7);
    // const date = k1.substring(8, 10);
    // const hour = k1.substring(11, 13);
    // const minute = k1.substring(14, 16);
    // let start_time_final =
    //   year + "/" + month + "/" + date + " " + hour + ":" + minute + ":00 +0000";
    // console.log(start_time_final + " GAP ");
    // console.log(
    //   convertTZ(
    //     start_time_final,
    //     Intl.DateTimeFormat().resolvedOptions().timeZone
    //   )
    // );
    const eventData = {
      name: name,
      start_time: start_time,
      end_time: end_time,
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
