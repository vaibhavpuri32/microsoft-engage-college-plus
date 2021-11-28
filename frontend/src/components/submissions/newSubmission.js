import React, { useState, useEffect } from "react";
import { makePostRequest } from "../../utils";
import { useNavigate, useParams } from "react-router"; 
import {toast} from "react-toastify";
export default function NewSubmissionPage(props) {
  const history = useNavigate();
  let { id } = useParams();
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("answer", selectedFile);
    formData.append("author", props.userId);
    formData.append("assignment", id);

    let headers = {};
    if (localStorage.token) {
      headers = { ...headers, Authorization: `Token ${localStorage.token}` };
    }
    fetch("http://127.0.0.1:8000/assignments/submission/", {
      method: "POST",
      headers,
      body: formData,
    });  
    toast.success("You have Created a Submission for the assignment")
    history("/assignments")
  }
  return (
    <div>
      <h1>Submit Assignment </h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={changeHandler} />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
