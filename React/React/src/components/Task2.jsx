import React from "react";

const Task2 = ({ count, dispatch }) => {
  return (
    <div id="task2">
      <h1>Task-2</h1>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch("reset")}>
        Reset
      </button>
      <p>
        2.1:useReducer
        <br />
        2.2:if action is increment I add to the state 1 and if is decrement i
        subtract from it 1.
      </p>
      <hr />
    </div>
  );
};

export default Task2;
