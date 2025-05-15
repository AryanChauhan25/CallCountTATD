import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleSubtract = () => {
    setCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <div className="card">
        <h1>Call Count : {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          Add +
        </button>
        
        <button 
          onClick={handleSubtract}
          disabled={count === 0}
          style={{ opacity: count === 0 ? 0.5 : 1 }}
        >
          Subtract -
        </button>

        <button 
          onClick={handleReset}
          disabled={count === 0}
          style={{ opacity: count === 0 ? 0.5 : 1 }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App 