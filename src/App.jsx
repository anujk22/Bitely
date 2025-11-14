import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bitely</h1>
      <p>
        Delicious recipes in the palm of your hand.
      </p>
    </>
  )
}

export default App
