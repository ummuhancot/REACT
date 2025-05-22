import React from "react";
import "../../assets/sass/clock.scss";
import moment from "moment";

export const Clock2 = (props) => {
  const { textColor, backgroundColor } = props;
  const dateTime = moment();

  const time = dateTime.format("HH:mm");
  const date = dateTime.format("ll");
  const day = dateTime.format("dddd");

  const hour = dateTime.format("H");
  let message = "";
  if (hour >= 6 && hour < 11) {
    message = "morning";
  } else if (hour >= 11 && hour < 14) {
    message = "noon";
  } else if (hour >= 14 && hour < 18) {
    message = "afternoon";
  } else if (hour >= 18 && hour < 22) {
    message = "evening";
  } else {
    message = "night";
  }

  const clockStyle = {
    color: textColor,
    backgroundColor: backgroundColor,
  };
  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time">{time}</div>
      <div>
        <div className="date">{date}</div>
        <div className="day">
          {day} {message}
        </div>
      </div>
    </div>
  );
};
