import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../utils";
import CalenderPage from "../calender/calender";
import { useNavigate } from "react-router-dom";
import EventItem from "./eventItem"; 


function AllEventsPage(props) {
  const history = useNavigate();
  const [loadedevents, setLoadedEvents] = useState([]);
  useEffect(() => {
    await makeGetRequest("http://localhost:8000/events/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedEvents(data);
      });
  }, []);

  return (
    <main>
      <h1>Upcoming Events</h1>
      <ul>
        {loadedevents.map((item, idx) => (
          <EventItem
            key={idx}
            event={item}
            userId={props.userId}
            setLoadedEvents={setLoadedEvents}
          />
        ))}
      </ul>

      <CalenderPage events={loadedevents} userId={props.userId} />
    </main>
  );
}

export default AllEventsPage;
// "http://localhost:8000/events/"
