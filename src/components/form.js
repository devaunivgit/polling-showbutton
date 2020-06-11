import React from "react";

import { Form } from "react-bootstrap";
const PollForm = props => {
  return (
    <>
      <Form.Group controlId="exampleForm.choice">
        {props.options.map((opt, index) => {
          return (
            <Form.Check
              key={index}
              type="radio"
              label={opt.description}
              id="answer"
              name="answer"
              defaultChecked={""}
              defaultValue={opt.value}
              required
            />
          );
        })}
        <Form.Control.Feedback type="invalid">
          Please choose option
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default PollForm;
