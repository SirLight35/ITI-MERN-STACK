import React from "react";

const Task4 = ({ text, setText }) => {
  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You are typing: {text}</p>

      <p>
        4.1:useState
        <br />
        4.2:when he write anything it setText(e.target.value) automatically will
        be written
      </p>
      <hr />
    </div>
  );
};

export default Task4;
