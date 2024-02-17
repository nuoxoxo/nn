// import { useState } from 'react'
import "./App.scss"
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <div id="app">
      <p>
        UI will show below once you complete the Confirmation component. See{" "}
        <code>App.jsx</code> for more info.
      </p>
      <Confirmation
        message="Is the pie a lie?"
        type="message"
        accept={
          () => console.log("accepted") // prints to browser console
        }
        decline={() => console.log("declined")}
      />
    </div>
  )
}

export default App
