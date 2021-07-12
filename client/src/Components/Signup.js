import React, { useState } from "react";
import { useHistory } from "react-router";

import { Form, Button, Col } from "react-bootstrap";

function Signup({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
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
          <Form.Label>Name</Form.Label>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                  placeholder="name"
                />
              </Col>
            </Form.Row>
          </Form>
        </Form.Group>
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
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  onChange={handleChange}
                  name="location"
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  value={formData.location}
                  placeholder="Please enter a 5 zip code"
                />
              </Col>
            </Form.Row>
          </Form>
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="button">
          Signup
        </Button>
      </Form>
    </>
  );
}

export default Signup;
