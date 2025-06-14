import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { TiMinus, TiPlus } from "react-icons/ti";

export const Child = ({ handleCount }) => {
  return (
    <ButtonGroup>
      <Button variant="dark" size="lg" onClick={() => handleCount(-1)}>
        <TiMinus className="d-block" />
      </Button>
      <Button variant="dark" size="lg" onClick={() => handleCount(1)}>
        <TiPlus className="d-block" />
      </Button>
    </ButtonGroup>
  );
};
