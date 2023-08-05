import { useState } from "react"
import Route1802 from "./Routes/Route1802"
import Route2210 from "./Routes/Route2210"
import RouteCats from "./Routes/RouteCats"

type TargetRoute = React.FC

var App = () => {
  const [ route, setRoute ] = useState<string>( '' )
  const handleSetRoute = (s: string) => {
    setRoute(s)
  }
  const routes: { [key: string]: TargetRoute } = {
    '2210': Route2210,
    '1802': Route1802,
    'cats': RouteCats
  }
  const TargetRoute = routes[route]
  return (
    <>
      <nav>
        <ul>
          <li><button onClick={()=>handleSetRoute('2210')}>22:10</button></li>
          <li><button onClick={()=>handleSetRoute('cats')}>Chats</button></li>
          <li><button onClick={()=>handleSetRoute('1802')}>18:02</button></li>
        </ul>
      </nav>
      { routes.hasOwnProperty(route) ? <TargetRoute /> : null }
    </>
  )
}

export default App
