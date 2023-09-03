import { useState } from 'react'
import './styles/App.scss'
import { GetRandomDateString } from "./helpers/Helpers";

const App = () => {



  const [RandomDateString/*, setRandomDateString*/] = 
    useState<string[]>(GetRandomDateString())

  return (
    <>
      <h1>{ RandomDateString.join(' ') }</h1>
    </>
  )
}

export default App 
