import React from "react";
import { Button, Container } from "react-bootstrap";

export const Stateless = () => {
  let classes = "bg-dark text-light";

  //Burada classes degeri degisse bile component re-render edilmedigi surece kullanici
  //degisiklikleri goremez.
  //Bu nedenle state kullanmak gerekir.

  const themeHandler = (mode) => {
    if (mode === "dark") {
      classes = "bg-dark text-light";
    } else if (mode === "light") {
      classes = "bg-light text-dark";
    }

    console.log(classes);
  };
  return (
    <Container className={`${classes} text-center py-5`}>
      <h1>Dark / Light Mode Switcher</h1>
      <div className="d-flex justify-content-center gap-4 mt-4">
        <Button variant="warning" onClick={() => themeHandler("dark")}>
          Dark Mode
        </Button>
        <Button variant="warning" onClick={() => themeHandler("light")}>
          Light Mode
        </Button>
      </div>
    </Container>
  );
};
