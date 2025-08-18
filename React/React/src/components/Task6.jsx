import React from "react";

const Task6 = ({ visible, setVisible }) => {
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Text" : "Show Text"}
      </button>
      {visible && <p>This is the text to show or hide.</p>}
      <p>
        6.1:Use a boolean state to track whether the text is visible or hidden.
        <br />
        6.2:use conditional rendering with &&
      </p>
      <hr />
    </div>
  );
};

export default Task6;
