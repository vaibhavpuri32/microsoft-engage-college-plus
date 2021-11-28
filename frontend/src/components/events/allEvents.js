import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../utils";
import CalenderPage from "../calender/calender";
import { useNavigate } from "react-router-dom";
import EventItem from "./eventItem";
import Container from "react-bootstrap/esm/Container";
function AllEventsPage(props) {
  const history = useNavigate();
  const [loadedevents, setLoadedEvents] = useState([]);
  useEffect(() => {
    makeGetRequest("http://localhost:8000/events/")
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

      <Container
        style={{
          width: "3000px",
          backgroundColor: "#D3D3D3",
        }}
      >
        <CalenderPage events={loadedevents} userId={props.userId} />
      </Container>
    </main>
  );
}

export default AllEventsPage;
// "http://localhost:8000/events/"
