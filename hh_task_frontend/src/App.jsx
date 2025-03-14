import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form/Form.jsx'
import Info from './components/additional_info/Info.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main">
      <Form/>
      <Info/>
    </div>
  )
}

export default App
