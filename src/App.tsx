import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormControl } from "react-bootstrap";

function App() {
  const [validate, setValidate] = useState(true);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      console.log("invalid");
      event.stopPropagation();
      return;
    }
    console.log("valid");
    setValidate(true);
  };
  return (
    <div>
      <h1>Welcome to Jayjay Login </h1>
      <Form noValidate validated={validate} onSubmit={onHandleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control
            placeholder="Masukan Alamat Email"
            type="email"
            required
          />
          <Form.Control.Feedback>Email Valid</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please insert email properly
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control
            placeholder="Masukan Password"
            type="password"
            required
          />
          <Form.Control.Feedback>Password Valid</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please insert password
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCheck">
          <Form.Check
            type="checkbox"
            label="Ingat Password"
            required
            feedback="Harus Ingat Password!"
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
