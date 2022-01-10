import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useInput from "../../hooks/useInput";

const Forma = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: email,
    isValid: emailValid,
    hasError: emailError,
    valueBlurHandler: emailBlurHandler,
    valueChangedHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput(isEmail);

  const {
    value: message,
    isValid: messageValid,
    hasError: messageError,
    valueBlurHandler: messageBlurHandler,
    valueChangedHandler: messageChangeHandler,
    reset: messageReset,
  } = useInput(isNotEmpty);

  let formValid = false;

  if (emailValid && messageValid) {
    formValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();
    if (!formValid) {
      return;
    }

    console.log(email, message);
    emailReset();
    messageReset();
  };

  return (
    <Form className="form" onSubmit={formHandler}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          //   className={emailClasses}
          type="text"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && (
          <span className="text-muted">Email has to contain @</span>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          id="textarea"
          value={message}
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
        />
        {messageError && (
          <span className="text-muted">Message must not be empty</span>
        )}
      </Form.Group>
      <Button variant="light" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Forma;
