import React from 'react'
import { useState } from 'react'
import GetRandomColorCSS from './GetRandomColorCSS'

function App() {

  const start = Math.floor(Math.random() * 2147483648)

  let [ count, // state variable
        setCount // state changer func
      ] = useState( start )

  let increment = () => { setCount( ++count ) }
  let decrement = () => { setCount( --count ) }
  let random = () => { setCount( Math.floor(Math.random() * 2147483648) ) }
  let reset = () => { setCount( 0 ) }

  return (
    <>

      <div>
        <button onClick={ reset }>⏼</button>
        <button onClick={ random }>⏻</button>
        <button onClick={ increment }>+</button>
        <button onClick={ decrement }>-</button>
      </div>

      <div style={ GetRandomColorCSS() }>{ count }</div>

      <div>
        <button onClick={ reset }>⏼</button>
        <button onClick={ random }>⏻</button>
        <button onClick={ increment }>+</button>
        <button onClick={ decrement }>-</button>
      </div>

    </>
  )
}

export default App
