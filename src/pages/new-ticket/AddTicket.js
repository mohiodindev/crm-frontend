import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../../Components/breadcrumbs/Breadcrumb";
import { AddTicketForm } from "../../Components/form/AddTicketForm";
const intailData = {
  subject: "",
  issueDate: "",
  details: "",
};
export const AddTicket = () => {
  const [formData, setFormData] = useState(intailData);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...intailData,
      [name]: value,
    });
  };
  //     const onHandleSubmit

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm handleOnChange={handleOnChange} formData={formData} />
        </Col>
      </Row>
    </Container>
  );
};
