import React from "react";
import "./ProfileCard.scss";

const abbreviateNumber = (number) => {
  let stringNumber = "";
  if (number > 1_000_000) {
    stringNumber = (number / 1_000_000).toFixed(1) + "M";
  } else if (number > 10_000) {
    stringNumber = (number / 1000).toFixed(1) + "K";
  } else {
    stringNumber = number.toString();
  }
  return stringNumber;
};

export const ProfileCard = (props) => {
  const { avatar, name, location, shots, followers, following } = props;

  return (
    <div className="profile-card">
      <div className="banner">
        <img src={`/img/profile/${avatar}`} alt="profile-pic" />
      </div>
      <div className="content">
        <img
          className="avatar"
          src={`/img/profile/${avatar}`}
          alt="profile-pic"
        />
        <h2 className="name">{name}</h2>
        <h4>{location}</h4>
        <ul className="stats">
          <li>
            <h3>{shots}</h3>
            <p>Shot{shots > 1 ? "s" : ""} </p>
          </li>
          <li>
            <h3>{abbreviateNumber(followers)}</h3>
            <p>Follower{followers > 1 && "s"}</p>
          </li>
          <li>
            <h3>{abbreviateNumber(following)}</h3>
            <p>Following</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
