import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    console.log("i run only once");
  }, []);

  useEffect(() => {
    console.log("i run when counter changes");
  }, [counter]);

  useEffect(() => {
    console.log("i run when keywork changes");
  }, [keyword]);

  useEffect(() => {
    console.log("i run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        onChange={onChange}
        type="text"
        value={keyword}
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
