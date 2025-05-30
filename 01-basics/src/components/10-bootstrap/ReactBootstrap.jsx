import React from "react";
import { Button, Card, Dropdown } from "react-bootstrap";

export const ReactBootstrap = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }} bg="dark" text="light">
        <Card.Img variant="top" src="/img/profile/profile.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Bana tikla
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
