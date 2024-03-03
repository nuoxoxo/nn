// import { useState } from 'react'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


function App() {

  // about react-router-dom
  // https://reactrouter.com/en/main/start/tutorial
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>hello, world!</h1>,
    },
    {
      path: "/about",
      element: <h1>About</h1>,
    },
  ]);

  return (
    <>
      <div className='App'>
        hello, world!
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
