import React from "react";

const Task5 = ({ addTask, tasks, input, setInput }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // render all tasks
        ))}
      </ul>
      <p>
        5.1:Use useState with an array to hold all tasks.
        <br />
        5.2:Use the spread operator ... to include existing tasks and append the
        new one.
      </p>
      <hr />
    </div>
  );
};

export default Task5;
