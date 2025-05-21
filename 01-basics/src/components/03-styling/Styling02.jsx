import React from "react";

export const Styling02 = () => {
  const titleStyle = {
    color: "red",
    backgroundColor: "lightblue",
    borderRadius: "4px",
    padding: "16px",
    fontSize: "20px",
  };
  return (
    <div>
      <h1>Styling in React</h1>
      <h2 style={titleStyle}>Internal Styling</h2>
    </div>
  );
};
