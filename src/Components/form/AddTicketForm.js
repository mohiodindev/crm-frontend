import React from "react";
import { Jumbotron, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
export const AddTicketForm = ({ onHandleSubmit, formData, handleOnChange }) => {
  return (
    <Jumbotron>
      <Form onSubmit={onHandleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={formData.subject}
              onChange={handleOnChange}
              placeholder="Enter subject"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            issue found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={formData.issueDate}
              onChange={handleOnChange}
              required
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Issue details</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            rows="5"
            value={formData.details}
            onChange={handleOnChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="info" block>
          Add New Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};
