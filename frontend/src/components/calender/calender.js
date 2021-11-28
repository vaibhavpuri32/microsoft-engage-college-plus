import React from "react";
import Calendar from "react-awesome-calendar";
import Container from "react-bootstrap/Container";
import { getdateinISO } from "../../utils";
function convertDateFormat(date1) { 
  const original_Date = new Date(date1 + 'Z')
  return original_Date.toISOString(); 
}
export default function CalenderPage(props) {
  let event_list = [];
  let color = ["#5AB6D1", "#1F27A8", "#106334"];

  props.events.map((item, idx) => {
    let d = getdateinISO(item.start_time);
    let d1 = getdateinISO(item.end_time);
    item = {
      id: idx,
      title: item.name,
      from: convertDateFormat(d),
      to:   convertDateFormat(d1),
      color: color[idx % 3],
    }; 
    event_list = [...event_list, item];

    return event_list;
  });
  return (
    <Container>
      <Calendar events={event_list} />
    </Container>
  );
}
