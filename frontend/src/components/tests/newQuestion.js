import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import {
  makeGetRequest,
  makePostRequest,
  convertDateFormat,
} from "../../utils";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function NewQuestionPage(props) {
  let { id } = useParams();
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState("");
  const [c4, setC4] = useState("");
  const [correct_answer, setCorrectAnswer] = useState("");
  const [max_score, setMaxScore] = useState(0);
  const test_id = id;

  async function handleSubmit(e) {
    e.preventDefault();

    const testData = {
      title: title,
      c1: c1,
      c2: c2,
      c3: c3,
      c4: c4,
      correct_answer: correct_answer,
      max_score: max_score,
      test: test_id,
    };
    await makePostRequest(
      "http://127.0.0.1:8000/mcq/question/",
      JSON.stringify(testData)
    );
    toast.success("You have Created a Questions");
    history("/tests")
  }
  return (
    <div>
      <h1>Create a new Question</h1>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div> 
        <div>
          <label>C1: </label>
          <input
            type="text"
            onChange={(e) => setC1(e.target.value)}
            value={c1}
          />
        </div> 
        <div>
          <label>C2: </label>
          <input
            type="text"
            onChange={(e) => setC2(e.target.value)}
            value={c2}
          />
        </div>  
        <div>
          <label>C3: </label>
          <input
            type="text"
            onChange={(e) => setC3(e.target.value)}
            value={c3}
          />
        </div>  
        <div>
          <label>C4: </label>
          <input
            type="text"
            onChange={(e) => setC4(e.target.value)}
            value={c4}
          />
        </div>  
        <div>
          <label>Correct answer: </label>
          <input
            type="text"
            onChange={(e) => setCorrectAnswer(e.target.value)}
            value={correct_answer}
          />
        </div>  
        <div>
          <label>Maximum Marks: </label>
          <input
            type="number"
            onChange={(e) => setMaxScore(e.target.value)}
            value={max_score}
          />
        </div> 
        <button>SUBMIT</button>
      </form> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" required id="title" type="text">
          <Form.Label>Question</Form.Label>
          <Form.Control
            on
            placeholder="Enter Question"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>

        <Form.Group className="mb-3" required id="c1" type="text">
          <Form.Label>C1 : </Form.Label>
          <Form.Control
            on
            placeholder="choice - 1"
            onChange={(e) => setC1(e.target.value)}
            value={c1}
          />
        </Form.Group>

        <Form.Group className="mb-3" required id="c2" type="text">
          <Form.Label>C2 : </Form.Label>
          <Form.Control
            on
            placeholder="choice - 2"
            onChange={(e) => setC2(e.target.value)}
            value={c2}
          />
        </Form.Group>
        <Form.Group className="mb-3" required id="c3" type="text">
          <Form.Label>C3 : </Form.Label>
          <Form.Control
            on
            placeholder="choice - 3"
            onChange={(e) => setC3(e.target.value)}
            value={c3}
          />
        </Form.Group>
        <Form.Group className="mb-3" required id="c4" type="text">
          <Form.Label>C4 : </Form.Label>
          <Form.Control
            on
            placeholder="choice - 4"
            onChange={(e) => setC4(e.target.value)}
            value={c4}
          />
        </Form.Group>
        <Form.Group className="mb-3" required id="correct_answer" type="text">
          <Form.Label>Correct Answer : </Form.Label>
          <Form.Control
            on
            placeholder="Correct answer"
            onChange={(e) => setCorrectAnswer(e.target.value)}
            value={correct_answer}
          />
        </Form.Group>
        <Form.Group className="mb-3" required id="max_score" type="text">
          <Form.Label>Max Score : </Form.Label>
          <Form.Control
            on
            placeholder="max_score"
            onChange={(e) => setMaxScore(e.target.value)}
            value={max_score}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
