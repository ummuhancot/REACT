import React from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxReset } from "react-icons/rx";

export const Counter = () => {
  let counter = 50; // Baslangic degeri
  return (
    <Container className="my-5 text-center">
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="primary"
          onClick={() => {
            counter--;
          }}
        >
          <FiMinus />
        </Button>
        <Button variant="secondary" disabled>
          {counter}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            counter++;
          }}
        >
          <FiPlus />
        </Button>
        <Button variant="secondary">
          <RxReset />
        </Button>
      </ButtonGroup>
    </Container>
  );
};
