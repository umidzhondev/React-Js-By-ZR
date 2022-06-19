import React from "react";
import "./Avatar.css";

function Avatar({ name, url }) {
  return (
    <img
      className="profile__avatar"
      width="128"
      height="128"
      alt={name}
      src={url}
    />
  );
}

export default Avatar;
