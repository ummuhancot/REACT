import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxReset } from "react-icons/rx";

export const CounterStateful = () => {
  const [counter, setCounter] = useState(50); // Baslangic degeri

  return (
    <Container className="my-5 text-center">
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="primary"
          onClick={() => setCounter((previous) => previous - 1)}
        >
          {/*Fonksiyonel guncelleme kullandigim icin state'in yenilendigine emin oldum.*/}
          <FiMinus />
        </Button>
        <Button variant="secondary" disabled>
          {counter}
        </Button>
        <Button variant="primary" onClick={() => setCounter(counter + 1)}>
          <FiPlus />
        </Button>
        <Button variant="secondary" onClick={() => setCounter(50)}>
          <RxReset />
        </Button>
      </ButtonGroup>
    </Container>
  );
};
/* import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RxReset } from "react-icons/rx";

export const CounterStateful = () => {
  const [counter, setCounter] = useState(50); // Baslangic degeri

  return (
    <Container className="my-5 text-center">
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" onClick={() => setCounter(counter - 1)}>
          <FiMinus />
        </Button>
        <Button variant="secondary" disabled>
          {counter}
        </Button>
        <Button variant="primary" onClick={() => setCounter(counter + 1)}>
          <FiPlus />
        </Button>
        <Button variant="secondary" onClick={() => setCounter(50)}>
          <RxReset />
        </Button>
      </ButtonGroup>
    </Container>
  );
};
 */
