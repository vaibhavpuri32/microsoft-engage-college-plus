import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../utils";
import { useParams } from "react-router";
import SubmissionItem from "../submissions/submissionItem";


export default function AllSubmissionsPage(props) {
  let { id } = useParams();
  const [loadedsubmissions, setLoadedSubmissions] = useState([]);
  useEffect(() => {
    makeGetRequest("http://127.0.0.1:8000/assignments/get_submissions/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedSubmissions(data);
      });
  }, []);
  return (
    <div>
      <h1> The following Students have submitted the assignment :  </h1>
      <ul>
        {loadedsubmissions.map((item, idx) => ( 
          <SubmissionItem key = {idx} submission ={item}/>
        ))}
      </ul>
    </div>
  );
}
