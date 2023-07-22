// import React from 'react'
import { useState } from 'react'
import { GetRandomPosShort, GetRandomColorCSS } from './GetRandomStuff'

function App() {

  const start = GetRandomPosShort()
  const startCSS = GetRandomColorCSS()

  let [ count, setCount ] = useState( start )
  let [ css, setCSS ] = useState( startCSS )


  //  btn functionality

  let reset = () => { setCount( 0 ) }

  let increment = () => { setCount( count += GetRandomPosShort() ) }
  let decrement = () => { setCount( count -= GetRandomPosShort() ) }

  let random = () => {

    setCount( Math.floor(GetRandomPosShort()) )
    setCSS( GetRandomColorCSS() )
  }


  //  interface

  interface GroupBTN {
    Top: JSX.Element
    Bottom: JSX.Element
  }
  
  const group: GroupBTN = {
    Top: (
      <div><button title='reset to zero' onClick={reset} >⏼</button>
      <button title='increment' onClick={increment}>⍤</button></div>
    ),
    Bottom: (
      <div>
        <button title='reset to a random number' onClick={random}>⏻</button>
        <button title='decrement' onClick={decrement}>⍥</button>
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
