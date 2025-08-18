import React from "react";

const Task7 = ({ fruits }) => {
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} - ${fruit.price}
          </li>
        ))}
      </ul>
      <p>
        7.1:Use .map() to loop over an array and return JSX for each item.
        <br />
        7.2:React uses keys to track elements when the list changes.
      </p>
    </div>
  );
};

export default Task7;
