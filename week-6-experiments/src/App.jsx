/* eslint-disable react/prop-types */


import { useState } from "react"

let counter = 4;
function App() {
  const [todos, setTodos] = useState([ {
    id: 1, 
    title: "Title 1",
    description: "desc 1"
  }, {
    id: 2,
    title: "Title 2",
    description: "desc 2"
  }, {
    id: 3,
    title: "Title 3",
    description: "desc 3"
  }])

  function addTodo () {
    setTodos([...todos, {
      id: counter++,
      title: "Title 4",
      description: "desc 4"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h2>{title}</h2>
    <h4>{description}</h4>
  </div>
}

export default App