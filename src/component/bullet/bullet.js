import React from "react";

import "./bullet.css";

const Bullet = (props) => {
  return (
    <div className="bullet">
      <div
        style={{ width: "35px", height: "6px", background: `${props.color}` }}
      ></div>
      <div
        style={{ width: "20px", height: "6px", background: `${props.color}` }}
      ></div>
      <div
        style={{ width: "10px", height: "6px", background: `${props.color}` }}
      ></div>
    </div>
  );
};

export default Bullet;
