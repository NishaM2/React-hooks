import { useMemo, useState } from "react"

function App() {
  const [counter, setCounter] = useState();
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo( () => {
    let finalcount = 0;
    for (let i=1; i<=inputValue; i++) {
      finalcount += i;
    }
    return finalcount;
  }, [inputValue]);

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }}></input> <br/>

    <p>Sum from 1 to {inputValue} is {count}</p> <br/>

    <button onClick={() => setCounter(counter + 1)}>Counter {counter} </button>
  </div>
}

export default App