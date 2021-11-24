import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../utils";
import CalenderPage from "../calender/calender";
import { useNavigate } from "react-router-dom";
import EventItem from "./eventItem";
function AllEventsPage(props) { 

  console.log("All events "+ props.userId);
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
          <li
            key={idx}
            // onClick={() => {
            //   history("/edit/" + item.id + "/");
            // }}
          >
            {/* {item.name} Created by id :{item.created_by} */}
            <EventItem  event = {item} userId={props.userId}/>
          </li>
        ))}
      </ul>

      <CalenderPage events={loadedevents} userId = {props.userId} />
    </main>
  );
}

export default AllEventsPage;
// "http://localhost:8000/events/"
