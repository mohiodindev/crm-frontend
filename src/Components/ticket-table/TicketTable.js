import React from "react";
import { Table } from "react-bootstrap";

export const TicketTable = ({ tickets }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Openned Date</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td> {row.Subject}</td>
              <td> {row.Status}</td>
              <td>{row.OpennedDate}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan="4" className="text-center">
              No Data to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
