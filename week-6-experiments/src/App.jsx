/* eslint-disable react/prop-types */

function App() {
  return <div>
    <CardWrapper innerComponent={<TextComponent/>} />
    <CardWrapper innerComponent={<TextComponent2/>} />
  </div>;
}

function CardWrapper({innerComponent}) {
  return <div style={{border: "2px solid black", padding: 10}}>
    {innerComponent}
  </div>
}

function TextComponent() {
  return <div>
    Text Component
  </div>
}

function TextComponent2() {
  return <div>
    Text Component 2
  </div>
}

export default App