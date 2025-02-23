import { useState } from "react"

function App() {
  return (
    <div>
      <div>
        <HeaderWithButton></HeaderWithButton>
        <Header title="nisha2"></Header>
        <Header title="nisha3"></Header>
      </div>
    </div>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is nisha");
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  
  return <div>
    <button onClick={updateTitle}>update the title</button> <br/>
    <Header title={title}></Header>
  </div>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App