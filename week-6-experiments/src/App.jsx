import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = 0;
  for (let i=1; i<=inputValue; i++) {
    count += i;
  }

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }}></input> <br/>

    <p>Sum from 1 to {inputValue} is {count}</p> <br/>

    <button onClick={() => setCounter(counter + 1)}>Counter {counter} </button>
  </div>
}

export default App