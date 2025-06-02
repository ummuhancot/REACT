import React, { useEffect, useState } from "react";
import "../../assets/sass/clock.scss";
import moment from "moment";

export const Clock3 = (props) => {
  const { textColor, backgroundColor, hideTime } = props;
  const [dateTime, setDateTime] = useState(moment());

  const date = dateTime.format("ll");
  const day = dateTime.format("dddd");

  const hour = dateTime.format("HH");
  const minute = dateTime.format("mm");
  const seconds = dateTime.format("ss");

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

  // Update the dateTime state every second
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="m-3 clock-container" style={clockStyle}>
      {!!hideTime || (
        <div className="time">
          {hour}
          <span style={{ opacity: seconds % 2 }}>:</span>
          {minute}
        </div>
      )}
      <div>
        <div className="date">{date}</div>
        <div className="day">
          {day} {message}
        </div>
      </div>
    </div>
  );
};
