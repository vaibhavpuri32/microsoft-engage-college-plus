import React from "react";
import Calendar from "react-awesome-calendar";
import Container from "react-bootstrap/Container";
export default function CalenderPage(props) {
  let event_list = [];
  let color = ["#000080", "#FF0000", "#6b8e23", "#ffff00", "#008080"];

  props.events.map((item, idx) => {
    const year = item.start_time.substring(0, 4);
    const month = item.start_time.substring(5, 7);
    const date = item.start_time.substring(8, 10);
    const hour = item.start_time.substring(11, 13);
    const minute = item.start_time.substring(14, 16);
    let d = year + "-" + month + "-" + date + "T" + hour + ":" + minute;
    const year1 = item.end_time.substring(0, 4);
    const month1 = item.end_time.substring(5, 7);
    const date1 = item.end_time.substring(8, 10);
    const hour1 = item.end_time.substring(11, 13);
    const minute1 = item.end_time.substring(14, 16);
    let d1 = year1 + "-" + month1 + "-" + date1 + "T" + hour1 + ":" + minute1;
    console.log(d1);
    item = {
      id: idx,
      title: item.name,
      from: new Date(d).toISOString(),
      to: new Date(d1).toISOString(),
      color: color[idx % 5],
    };
    event_list = [...event_list, item];
  });

  console.log(event_list);
  return (
    <Container>
      <Calendar events={event_list} />
    </Container>
  );
}
