import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddProducts from './Components/AddProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AddProducts />
    </div>
  )
}

export default App
