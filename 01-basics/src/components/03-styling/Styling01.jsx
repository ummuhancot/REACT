import React from "react";
export const Styling01 = () => {
  const hasBorderRadius = false;
  const padding = "16px";
  return (
    <div>
      <h1>Styling in React</h1>
      <h2
        style={{
          color: "red",
          backgroundColor: "lightblue",
          borderRadius: hasBorderRadius ? "4px" : "0",
          padding,
          fontSize: "20px",
        }}
      >
        Inline Styling
      </h2>
    </div>
  );
};
