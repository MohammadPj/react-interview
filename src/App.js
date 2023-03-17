import "./styles.css";
import { useCallback, useState } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <input value={text} onChange={handleChange} />
      <Child handleClick={handleClick} />

      <h1>Parent</h1>
      <h2>count: {count}</h2>
    </div>
  );
}
