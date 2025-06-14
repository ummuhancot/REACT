import React from "react";
import { Card, Nav } from "react-bootstrap";

export const MainMenu = () => {
  return (
    <Card>
      <Card.Body>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Card.Body>
    </Card>
  );
};
