import { useState } from 'react'

import Login from './pages/Login/Login'
import './styles/styles.css'

export const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>new ERP</h1>
      <h6>{process.env.name}</h6>
      <Login title={'Hello world'} />

      <button
        onClick={() => {
          setCounter((prev) => prev + 1)
        }}
      >
        Counter: {counter}
      </button>
    </div>
  )
}
