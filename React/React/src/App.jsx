import { act, Fragment, useEffect, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task1 from "./components/task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import Task6 from "./components/Task6";
import Task7 from "./components/Task7";
// import useState from "react";
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//task2
const reducer = (state, action) => {
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return (state = 0);
  }
};

const fruits = [
  { id: 1, name: "Apple", price: 1.2 },
  { id: 2, name: "Banana", price: 0.8 },
  { id: 3, name: "Orange", price: 1.5 },
];
const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const colors = ["red", "blue", "green"];
  const [bgColor, setBgColor] = useState("white");
  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState();
  return (
    <div>
      <Task1 />
      <Task2 count={count} dispatch={dispatch} />
      <Task3 changeColor={changeColor} bgColor={bgColor} />
      <Task4 text={text} setText={setText} />
      <Task5
        addTask={addTask}
        tasks={tasks}
        input={input}
        setInput={setInput}
      />
      <Task6 visible={visible} setVisible={setVisible} />
      <Task7 fruits={fruits} />
    </div>
  );
};

export default App;
