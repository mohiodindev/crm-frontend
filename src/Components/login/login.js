import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export function LoginForm({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  password,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info txext-center"> Client Login</h1>
          <hr></hr>
          <br />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Button type="submit"> Login</Button>
          </Form>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col>
          <a onClick={() => formSwitcher("reset")} href="#!">
            Forgot Password
          </a>
        </Col>
      </Row>
    </Container>
  );
}

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
