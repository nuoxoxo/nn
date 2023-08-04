import Route2210 from "./Routes/Route2210"
import Route2113 from "./Routes/Route2113"
import { BrowserRouter as Router, Route, Routes /*, Link*/ } from "react-router-dom"

var App = () => {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <button onClick={() => window.location.href="/route2210"}>
              22:10</button>
            </li>
            <li>
              <button onClick={() => window.location.href="/route2113"}>
              21:13</button>
            </li>
          </ul>
        </nav>

        {/* must define routes below nav */}
        <Routes>
          <Route path="/route2210" element={<Route2210 />} />
          <Route path="/route2113" element={<Route2113 />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
