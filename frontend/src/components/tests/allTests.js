import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../utils";
import TestItem from "./testItem";
export default function AllTestsPage(props) {
  const [loadedtests, setLoadedTests] = useState([]);
  useEffect(() => {
    makeGetRequest("http://localhost:8000/mcq/test/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedTests(data);
      });
  }, []);
  return (
    <div>
      <h1>Tests </h1>
      <ul>
        {loadedtests.map((item, idx) => ( 
          <TestItem
            key={idx}
            test={item}
            userId={props.userId}
            setLoadedTests={setLoadedTests}
            isTeacher={props.isTeacher}
          />
        ))}
      </ul>
    </div>
  );
}
