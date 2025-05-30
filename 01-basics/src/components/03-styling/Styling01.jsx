import React from "react";

export const Styling01 = () => {
  const hasBorderRadius = true;

  return (
    <div>
      <h1 style= { {color: "blue"} } >Styling in React</h1>
      <h2
        style={{
          color: "red",
          backgroundColor: "black",
          padding: "10px",
          borderRadius: hasBorderRadius ? "5px" : "undefined",
          textAlign: "center",
        }}
      >
        Inline Styling
      </h2>
    </div>
  );
};
