import { useState } from 'react'
import { GetRandomColor } from './Helpers'
import './App.scss'

function App() {
  const [textColor, SetTextColor] = useState(GetRandomColor())

  return (
    <>
      <h1>
        <span style={{ color: textColor }}>Hello</span>
        &nbsp;
        <span style={{ color: textColor }}>World</span>
      </h1>
    </>
  )
}

export default App
