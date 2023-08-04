import Route2210 from "./Routes/Route2210"
import Route2113 from "./Routes/Route2113"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

var App = () => {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/route2210">y22d10</Link>
            </li>
            <li>
              <Link to="/route2113">y21d13</Link>
            </li>
          </ul>
        </nav>

        {/* define routes */}
        <Routes>
          <Route path="/route2210" element={<Route2210 />} />
          <Route path="/route2113" element={<Route2113 />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
