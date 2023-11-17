import React from "react";
import "../Profile/Profile.css";

const CountCard = ({text,data}) => {
  return (
    <div className="white-card-container">
      <h3>{text}</h3>
      <span className="value">{data ?? 0}</span>
      <span>Total count</span>
    </div>
  );
};

export default CountCard;
