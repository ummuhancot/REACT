import React, { useState } from "react";
import { Container, FormControl } from "react-bootstrap";

export const Form1 = () => {
  const [email, setEmail] = useState("bob@mail.com");
  return (
    <Container className="my-4 d-flex flex-column gap-3">
      {/* CONTROLLED INPUT: Input eger bir state'e bagli ise, controlled inputtur. */}
      {/* FormControl'e sadece bir value verilirse read-only olur.*/}
      <FormControl
        type="email"
        placeholder="Enter an email address."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* UNCONTROLLED INPUT: Input eger bir state'e bagli degil ise, uncontrolled inputtur. */}
      <FormControl
        type="email"
        placeholder="Enter an email address."
        defaultValue={"bob@mail.com"}
      />
    </Container>
  );
};
