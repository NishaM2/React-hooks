/* eslint-disable react/prop-types */

function App() {
  return <div>
    
    <CardWrapper>
      <TextComponent/>
    </CardWrapper>

    <CardWrapper>
      <div>
        hello there
      </div>
    </CardWrapper>
  </div>;
}

function CardWrapper({children}) {
  return <div style={{border: "2px solid black", padding: 10}}>
    {children}
  </div>
}

function TextComponent() {
  return <div>
    hi from text component
  </div>
}

export default App