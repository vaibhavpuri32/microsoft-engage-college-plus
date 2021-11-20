import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
function NewEventForm(props) {
  const [name, setName] = useState("");
  const [start_time, setStartTime] = useState(new Date());
  const [end_time, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const eventData = {
      name: name,
      start_time: start_time,
      end_time: end_time,
      description: description,
    };

    fetch("http://127.0.0.1:8000/events/", {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div>
      <h1>Add a new Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <DateTimePicker onChange={setStartTime} value={start_time} />
        </div>
        <div>
          <DateTimePicker onChange={setEndTime} value={end_time} />
        </div>
        <div>
          <input
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
