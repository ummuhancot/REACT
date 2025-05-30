import React from "react";
import { Button, Container } from "react-bootstrap";

export const EventHandler2 = () => {
  //Eger parameterli event handler kullanacaksak, bu handler event listener iceirisinde
  //mutlaka araci bir fonksiyon ile cagirilmalidir.
  //Ornek:    onClick={handleClick(parameter)} (yanlis)
  //          onClick={() => handleClick(parameter)}  (dogru)

  const handleClick = (name) => {
    alert(`Welcome, ${name}!`);
  };
  return (
    <Container className="mt-3 mx-3">
      <h1>Event Handler</h1>
      <Button variant="dark" onClick={() => handleClick("Bob")}>
        Click Me
      </Button>
    </Container>
  );
};
/*
Yukarida yaptigim aslinda bu asagidaki kodun aynisi, sadece anonim fonksiyon kullandim.
export const EventHandler2 = () => {
  const handleClick = (name) => {
    alert(`Welcome, ${name}!`);
  };

  const callback = () => handleClick("Bob");

  return (
    <Container className="mt-3 mx-3">
      <h1>Event Handler</h1>
      <Button variant="dark" onClick={callback}>
        Click Me
      </Button>
    </Container>
  );
};
*/
