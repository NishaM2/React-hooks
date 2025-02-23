import React, { useState } from "react"

function App() {
  const [title, setTitle] = useState("my name is nisha");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <div>
        <button onClick={updateTitle}>update the title</button> <br/>
        <Header title={title}></Header>
        <Header title="nisha2"></Header>
        <Header title="nisha3"></Header>
        <Header title="nisha4"></Header>
        <Header title="nisha5"></Header>
        <Header title="nisha6"></Header>
      </div>
    </div>
  )
}

const Header = React.memo(function Header({title}) {
  return <div>
    {title}
  </div>
})

export default App