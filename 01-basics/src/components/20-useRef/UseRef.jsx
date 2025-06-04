import React, { useEffect, useRef } from "react";
import { Container, FormControl } from "react-bootstrap";

export const UseRef = () => {
  const inputUsernameRef = useRef(null);

  // DOM elementlerine erişmek için useRef kullanılır. Bu sayede repaint ve reflow işlemleri yapılmadan doğrudan DOM elementine erişilebilir.
  useEffect(() => {
    const input = inputUsernameRef.current;
    input.focus();
    input.classList.add("bg-dark");
    input.classList.add("border-primary");
    input.classList.add("text-light");
  }, []);

  //  Bu saglikli bir yontem degil. useRef ile DOM elementlerine erismek daha uygundur.
  //   useEffect(() => {
  //     document.getElementById("text").focus();
  //   });
  return (
    <Container className="mt-4">
      <FormControl className="" id="text" ref={inputUsernameRef} />
    </Container>
  );
};
