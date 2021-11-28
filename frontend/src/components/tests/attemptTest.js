import React, { useEffect, useState } from "react";
import { Test, Question, QuestionGroup, Option } from "react-multiple-choice";
import {
  makeGetRequest,
  makePostRequest,
  convertDateFormat,
} from "../../utils";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
export default function AttemptTestPage(props) {
  let { id } = useParams();
  const [loadedquestions, setLoadedQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [test_taken, setTestTaken] = useState(false);
  const [score, setScore] = useState(0);
  async function get_score() {
    const data1 = await makeGetRequest(
      "http://localhost:8000/mcq/calculate-user-score/" + id
    ).then((r) => r.json()); 
    setScore(data1["score"]);
  }
  
  useEffect(async () => { 
    const data = await makePostRequest(
      "http://localhost:8000/mcq/start-test",
      JSON.stringify({ student: props.userId, test: id })
    ).then((r) => r.json());
    if (data["message"] === "Test Taken") {
      setTestTaken(true); 
       get_score();
    }
    const question_list = await makeGetRequest(
      "http://localhost:8000/mcq/get-questions/" + id
    ).then((r) => r.json());
    setLoadedQuestions(question_list);
    setLoading(false); 
    
  }, [props.userId]);
  async function handleSubmit() {
    const answers = Array(loadedquestions.length);
    for (let i = 0; i < loadedquestions.length; i++) {
      if (selectedOptions[i]) answers[i] = selectedOptions[i];
    }
    const ans_list = answers.join(",");
    const data = await makePostRequest(
      "http://localhost:8000/mcq/update-answer",
      JSON.stringify({ answer_list: ans_list, test: id })
    );
    const data1 = await makeGetRequest(
      "http://localhost:8000/mcq/calculate-user-score/" + id
    ).then((r) => r.json());
    setScore(data1["score"]);
    setTestTaken(true);
  }
  if (loading) {
    return "loading ...";
  }
  if (test_taken) {
    return <h1>You have completed the test your score is {score} .</h1>;
  }
  return (
    <div>
      <h1>Attempt the tests </h1>
      <Test
        onOptionSelect={(s) => {
          setSelectedOptions(s);
        }} style = {{width : "100%"}}
      >
        {loadedquestions.map((q, i) => (
          <QuestionGroup key={i} questionNumber={i}>
            <Question style={{ fontSize: "26px", marginTop: "15px" }}>
              {q.title}
            </Question>
            <Option value="c1">{q.c1}</Option>
            <Option value="c2">{q.c2}</Option>
            <Option value="c3">{q.c3}</Option>
            <Option value="c4">{q.c4}</Option>
          </QuestionGroup>
        ))}
      </Test>
      {/* <ul>
        {se.map((item, idx) => (
          <p>{item.title}</p>
        ))}
      </ul> */}
      <Button className="d-block mt-4" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </div>
  );
}

// Todo
// update the answers backend- - submitted = true
// calclkate score and show

// 1. if test is taken, get the score
