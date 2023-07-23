// import React from 'react'
import { useState } from 'react'
import { GetRandomPosShort, GetRandomColorCSS } from './GetRandomStuff'

function App() {

  // Learning Hooks
  //  1st part : counter and counter CSS

  const countStart = GetRandomPosShort()
  const cssCountStart = GetRandomColorCSS()

  let [ count, setCount ] = useState( countStart )
  let [ cssCount, setCSSCount ] = useState( cssCountStart )

  //  btn functionality

  let reset = () => { setCount( 0 ) }

  let increment = () => { setCount( count += GetRandomPosShort() ) }
  let decrement = () => { setCount( count -= GetRandomPosShort() ) }

  let random = () => {

    setCount( Math.floor(GetRandomPosShort()) )
    setCSSCount( GetRandomColorCSS() )
  }

  //  interface

  interface GroupBTN {
    Top: JSX.Element
    Bottom: JSX.Element
  }
  
  const groupBtn: GroupBTN = {
    Top: (
      <div>
        <button title='reset to zero' onClick={reset} >⏼</button>
        <button title='decrement randomly' onClick={decrement}>⍤</button>
      </div>
    ),
    Bottom: (
      <div>
        <button title='reset to a random number' onClick={random}>⏻</button>
        <button title='increment randomly' onClick={increment}>⍥</button>
      </div>
    ),
  }

  //  2nd part : input bar

  const defaultInput: string = 'M.M.J.'
  let [ input, displayInput ] = useState( defaultInput )

  let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '') {
      displayInput( defaultInput )
      return
    }
    displayInput( value )
  }

  return (

    <>

      {/* Counter */}
      { groupBtn.Top }
      <div className='div-count' style={ cssCount }>
        { count }
      </div>
      { groupBtn.Bottom }

      {/* Input */}
      <div className='div-input-field' >
        <input className='input-field'
          placeholder={defaultInput}
          onChange={ onChange } >
        </input>
      </div>
      <div className='div-input-text'>
        { input }
      </div>
    </>
  )
}

export default App
