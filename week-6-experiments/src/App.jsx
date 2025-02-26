import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(1);
  return <div>
    <button onClick={function() {
      setCount(1);
    }}>1</button>

    <button onClick={function() {
      setCount(2);
    }}>2</button>
    
    <button onClick={function() {
      setCount(3);
    }}>3</button>

    <Todo id = {count} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?id=" + id)
      .then(async function (res) {
        const json = await res.json();
        setTodo({ id: json[0].id, title: json[0].title, description: "No description available" });
    })
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App