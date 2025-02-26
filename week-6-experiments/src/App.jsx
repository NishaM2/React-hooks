import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos/random")
      .then(async function (res) {
        const json = await res.json();
        setTodos([{ id: json.id, title: json.todo, description: "No description available" }]);
      })
  }, []);

  return(
    <>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({ title, description }){
  return <div>
    <h1>{title}</h1>
    {description}
  </div>
}



export default App