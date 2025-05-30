import React from "react";

export const Styling03 = () => {
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
      <h2
        style={{
          ...titleStyle,
          backgroundColor: "lightgreen",
          color: "purple",
        }}
      >
        Internal & Inline Styling
      </h2>
      <h2 style={titleStyle}>Internal & Inline Styling</h2>
      <h2 style={titleStyle}>Internal & Inline Styling</h2>
    </div>
  );
};
