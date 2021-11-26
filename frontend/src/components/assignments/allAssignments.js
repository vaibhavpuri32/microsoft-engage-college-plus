import React, { useEffect, useState } from "react"; 
import { makeGetRequest } from "../../utils";
import  AssignmentItem from "./assignmentItem"; 
export default function AllAssignmentsPage(props) {
  const [loadedassignments, setLoadedAssignments] = useState([]);
  useEffect(() => {
    makeGetRequest("http://localhost:8000/assignments/assignment/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedAssignments(data);
      });
  }, []);
  return (
    <div>
      <h1>Pending Assignments </h1>
      <ul>
        {loadedassignments.map((item, idx) => (
          <AssignmentItem
            key={idx}
            assignment={item}
            userId={props.userId}
            setLoadedAssignments={setLoadedAssignments} 
            isTeacher = {props.isTeacher}
          />
        ))}
      </ul>
    </div>
  );
}
