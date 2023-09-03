import { useState } from 'react'
import './styles/App.scss'
import { GetRandomDateString } from "./helpers/Helpers";

const App = () => {
  const [RandomDateArray/*, setRandomDateString*/] = 
    useState<[string, number, number]>(GetRandomDateString())

  return (
    <>
      <h1>{ RandomDateArray.join(' ') }</h1>
    </>
  )
}

export default App 
