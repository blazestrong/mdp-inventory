import { useState } from 'react'
import Layout from './components/layout'
import InventoryPage from './pages/inventorypage'
import Login from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Login />
    </div>
    </>
  )
}

export default App
