import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../utils";
import CalenderPage from "../calender/calender";
function AllEventsPage() {
  const [loadedevents, setLoadedEvents] = useState([]);

  useEffect(() => {
    makeGetRequest("http://localhost:8000/events/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const events = [];
        for (const key in data) {
          const event = {
            id: key,
            ...data[key],
          };
          events.push(event);
        }
        setLoadedEvents(events);
      });
  }, []);

  return (
    <main>
      <h1>Upcoming Events</h1>
      <ul>
        {loadedevents.map((item, idx) => (
          <li key={idx}>{item.name} </li> 
                     
        ))} 
      </ul> 

      <CalenderPage events={loadedevents} />
    </main>
  );
}

export default AllEventsPage;
// "http://localhost:8000/events/"
