// import { useState } from 'react'
import './App.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


function App() {

  // about react-router-dom
  // https://reactrouter.com/en/main/start/tutorial
  const routes = []
  for (let i = 0; i < 1001; i++) {
    routes.push({path: '/' + i, element: <h1>{i}</h1>})
  }
  const router = createBrowserRouter([
    ... routes,
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
