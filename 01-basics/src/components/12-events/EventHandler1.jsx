import React from "react";
import { Button, Container } from "react-bootstrap";

export const EventHandler1 = () => {
  // Event handler function
  const handleClick = () => {
    alert("Button clicked!");
  };
  //onClick icerisinde cagirilacak fonksiyon () olmadan yazilmailidir.
  return (
    <Container className="mt-3 mx-3">
      <h1>Event Handler</h1>
      <Button variant="dark" onClick={handleClick}>
        Click Me
      </Button>
    </Container>
  );
};
