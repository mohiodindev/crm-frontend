import React from "react";
import { TicketTable } from "../../Components/ticket-table/TicketTable.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import tickets from "../../Assests/data/dummyticket.json";
export const DashBoardPage = () => {
  return (
    <Container>
      <Row>
        <Col className=" text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Create New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className=" text-center mb-2">
          <div>Total Tickets 50</div>
          <div>Total Tickets 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">Recently added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-tickets">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
