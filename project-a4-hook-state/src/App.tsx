import React from 'react'
import { useState } from 'react'
import GetRandomColorCSS from './GetRandomColorCSS'

function App() {

  const start = Math.floor(Math.random() * 32767)
  const startCSS = GetRandomColorCSS()

  let [ count, setCount ] = useState( start )
  let [ css, setCSS ] = useState( startCSS )

  let increment = () => { setCount( ++count ) }
  let decrement = () => { setCount( --count ) }
  let reset = () => { setCount( 0 ) }

  let random = () => {

    setCount( Math.floor(Math.random() * 32767) )
    setCSS( GetRandomColorCSS() )
  }

  interface GroupBTN {
    Top: JSX.Element
    Bottom: JSX.Element
  }
  
  const group: GroupBTN = {
    Top: (
      <div>
        <button onClick={reset}>⏼</button>
        <button onClick={increment}>⍤</button>
        
      </div>
    ),
    Bottom: (
      <div>
        <button onClick={random}>⏻</button>
        <button onClick={decrement}>⍥</button>
      </div>
    ),
  }
 
  return (

    <>
      { group.Top }
      <div style={ css }>{ count }</div>
      { group.Bottom }
    </>
  )
}

export default App
