import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((toDos) => [toDo, ...toDos]);
    setToDo("");
    console.log(toDos);
  };
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          text="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      {toDos}
    </div>
  );
}

export default App;
