import React, { useState } from "react";
import { useHistory } from "react-router";

import { Form, Button, Col } from "react-bootstrap";

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          const { user, token } = data;
          localStorage.setItem("token", token);
          setUser(user);
          history.push("/plants");
        }
      });
  }

  return (
    <>
      <Form autoComplete="off">
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  placeholder="email"
                />
              </Col>
            </Form.Row>
          </Form>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  placeholder="password"
                />
              </Col>
            </Form.Row>
          </Form>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="button">
          Login
        </Button>
      </Form>
    </>
  );
}

export default Login;
