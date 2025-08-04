import { useState } from 'react'
import './App.css'
import './index.css'
import Card from './components/Card'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-xl mb-6 text-3xl font-semibold text-center">
        Hello
      </h1>
      <Card username="Yash" />
      <Card username="Raj"/>

    </>
  )
}

export default App
