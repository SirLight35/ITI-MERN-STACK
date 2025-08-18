import React from "react";

const Task1 = () => {
  const name = "ibrahim";
  return (
    <div id="task1">
      <h1>Task-1</h1>
      <h1 id="task1-h1">Hello, {name}</h1>
      <p>
        1.1-Static value → just store it in a normal variable or constant inside
        your component. <br />
        1.2-Dynamic value → store it in state using useState
      </p>
      <hr />
    </div>
  );
};

export default Task1;
