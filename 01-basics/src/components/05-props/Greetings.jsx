import React from "react";
import { Welcome } from "./Welcome";

export const Greetings = () => {
  return (
    <div>
      <Welcome firstName="Bob" lastName="Smith" />
      <Welcome firstName="Mike" lastName="Olsen" />
      <Welcome firstName="Michael" lastName="Jackson" />
      <Welcome firstName="Murat" lastName="Yilmaz" />
    </div>
  );
};
