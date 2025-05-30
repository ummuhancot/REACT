import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

export const Stateful = () => {
  // State kullanmak icin useState hook'unu import etmemiz gerekir.
  const [classes, setClasses] = useState("bg-dark text-light");
  //useState, bir state degiskeni ve bu degiskeni guncellemek icin
  //bir fonksiyon dondurur.
  return (
    <Container className={`${classes} text-center py-5`}>
      <h1>Dark / Light Mode Switcher</h1>
      <div className="d-flex justify-content-center gap-4 mt-4">
        <Button
          variant="warning"
          onClick={() => setClasses("bg-dark text-light")}
        >
          Dark Mode
        </Button>
        <Button
          variant="warning"
          onClick={() => setClasses("bg-light text-dark")}
        >
          Light Mode
        </Button>
      </div>
    </Container>
  );
};
