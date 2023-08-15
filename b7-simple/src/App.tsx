// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AOC1502 from "./includes/AOC1502"
import AOC1501 from "./includes/AOC1501"
import './styles/App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2>Hello World</h2>
      <div className='nav'>
        <button className='btn' onClick={() => window.location.href="/AOC1501"}>
          15:01
        </button>
        <button className='btn' onClick={() => window.location.href="/AOC1502"}>
          15:02
        </button>
      </div>
      <Router>
        <Routes>
          <Route path="/AOC1501" element={ <AOC1501 /> } />
          <Route path="/AOC1502" element={ <AOC1502 /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
