import { useState } from 'react'
import Layout from './components/layout'
import InventoryPage from './pages/inventorypage'
import Login from './pages/login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
