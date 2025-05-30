import React from "react";
import "../../assets/sass/clock.scss";
import moment from "moment";

export const Clock2 = ({ textColor, backgroundColor, hideTime }) => {
  const dateTime = moment();

  const time = dateTime.format("HH:mm");
  const date = dateTime.format("ll");
  const day = dateTime.format("dddd");

  let message = "";
  const hour = dateTime.hour();

  if (hour >= 6 && hour < 11) {
    message = "Morning";
  } else if (hour >= 11 && hour < 14) {
    message = "Noon";
  } else if (hour >= 14 && hour < 18) {
    message = "Afternoon";
  } else if (hour >= 18 && hour < 22) {
    message = "Evening";
  } else {
    message = "Night";
  }

  const clockStzle = {
    color: textColor,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="clock-container" style={clockStzle}>
    { !!hideTime ||  <div className="time">{time}</div>}
      <div>
        <div className="date">{date}</div>
        <div className="day">
          {day} {message}
        </div>
      </div>
    </div>
  );
};
