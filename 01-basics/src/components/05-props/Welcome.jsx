import React from "react";

export const Welcome = (props) => {
  console.log(props);
  return (
    //Biz bazi propertyleri opsiyonel de yapabiliriz.
    <div style={{ color: props.textColor || "red" }}>
      <h2>
        Welcome {props.firstName} {props.lastName}
      </h2>
    </div>
  );
};
