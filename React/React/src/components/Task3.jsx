import React from "react";

const Task3 = ({ changeColor, bgColor }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={changeColor}>Change Background Color</button>
      <p style={{ position: "relative", marginTop: "30%", marginRight: "10%" }}>
        3.1: You can use useState or useReducer.
        <br />
        3.2: Math.floor(Math.random() * colors.length) ;
      </p>
      <hr />
    </div>
  );
};

export default Task3;
