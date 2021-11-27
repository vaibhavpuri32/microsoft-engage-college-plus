import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../utils";
import Card from "react-bootstrap/Card";
export default function SubmissionItem(props) {
  //console.log(props.submission);
  const [name, setName] = useState("");
  useEffect(async () => {
    const responseData = await makeGetRequest(
      "http://127.0.0.1:8000/accounts/get-user-data/" + props.submission.author
    );
    const data = await responseData.json();
    setName(data["first_name"] + "  " + data["last_name"]);
  }, []);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <img height="400" width="600" src={props.submission.answer} />
      </Card.Body>
    </Card>
  );
}
