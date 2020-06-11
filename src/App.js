import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PollForm from "./components/form";
export default function App() {
  const validated = useSelector(state => state.validated);
  const questions = useSelector(state => state.questions);
  const showAnswer = useSelector(state => state.showAnswer);
  const actualAnswer = useSelector(state => state.actualAnswer);
  const answers = useSelector(state => state.answers);
  const dispatch = useDispatch();
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      dispatch({ type: "FormValid" });
    } else {
      event.preventDefault();
      event.stopPropagation();
      const result = answers.filter(e => {
        let flag = false;
        if (e.id === form.qn.value && e.answer === form.answer.value) {
          flag = true;
        }
        return flag;
      });
      dispatch({ type: "ANSWER", value: result });
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Polling</h1>
          </Col>
        </Row>
        {questions.map(question => {
          return (
            <React.Fragment key={question.id}>
              <Row>
                <Col>
                  <h3>{question.active && question.qn}</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    {question.active && (
                      <Form.Group controlId="exampleForm.questionId">
                        <Form.Control
                          type="hidden"
                          name="qn"
                          defaultValue={question.id}
                        />
                      </Form.Group>
                    )}

                    {question.active && <PollForm options={question.options} />}

                    {question.active && (
                      <Form.Group as={Row}>
                        <Col xs="4">
                          <Button
                            variant="primary"
                            type="button"
                            onClick={() => dispatch({ type: "PREVIOUS" })}
                          >
                            Previous
                          </Button>
                        </Col>
                        <Col xs="4">
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Col>
                        <Col xs="4">
                          <Button
                            variant="primary"
                            onClick={() => dispatch({ type: "NEXT" })}
                            type="button"
                          >
                            Next
                          </Button>
                        </Col>
                      </Form.Group>
                    )}
                  </Form>
                </Col>
              </Row>
            </React.Fragment>
          );
        })}
        {showAnswer && (
          <Row>
            <Col>
              {actualAnswer ? <h4>Right Answer</h4> : <h4>Wrong Answer</h4>}
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}
