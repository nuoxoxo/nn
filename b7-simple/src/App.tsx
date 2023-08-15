import { useState } from 'react'
import AOC2210 from "./includes/AOC2210"
import AOC1802 from "./includes/AOC1802"
import AOC1502 from "./includes/AOC1502"
import AOC1501 from "./includes/AOC1501"
import './styles/App.scss'

type TargetRoute = React.FC

const routes: { [key: string]: TargetRoute } = {
  '2210': AOC2210,
  '1802': AOC1802,
  '1502': AOC1502,
  '1501': AOC1501,
}

function App() {
  const [ route, setRoute ] = useState<string>( '' )
  const handleSetRoute = (r: string) => {
    setRoute(r)
  }
  const TargetRoute = routes[route]

  return (
    <>
      <h2>Hello World</h2>
      <div className='nav'>
        <button className='btn' onClick={()=>handleSetRoute('1501')}>
          15:01
        </button>
        <button className='btn' onClick={()=>handleSetRoute('1502')}>
          15:02
        </button>
        <button className='btn' onClick={()=>handleSetRoute('1802')}>
          18:02
        </button>
        <button className='btn' onClick={()=>handleSetRoute('2210')}>
          22:10
        </button>
      </div>
      { routes.hasOwnProperty(route) ? <TargetRoute /> : null }
    </>
  )
}

export default App
