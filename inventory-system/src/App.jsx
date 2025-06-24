import { useState } from 'react'
import Layout from './components/layout'
import InventoryPage from './pages/inventorypage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      <InventoryPage />
    </Layout>
    </>
  )
}

export default App
