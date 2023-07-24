// import React from 'react'
import { useState, useRef } from 'react'
import { GetRandomPosShort, GetRandomColorCSS } from './GetRandomStuff'

const countStart = GetRandomPosShort()
const cssCountStart = GetRandomColorCSS()

const textArr: string[] = [
  'M.M.J.', 'MMJ', 'maymayjune',
  'n.c.e.', 'nce', 'nonchaoer',
  '🌞🆕🌙🔄', 'rxyy', 
  '🐷🐷', '☕☕', '🐯🐯'
]
const defaultInput: string = textArr[ Math.floor(Math.random() * textArr.length) ]


function App() {

  // Learning Hooks
  //  1st part : counter and counter CSS

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
        <button title='reset to zero' onClick={ reset } >⏼</button>
        <button title='decrement randomly' onClick={ decrement }>⍤</button>
      </div>
    ),
    Bottom: (
      <div>
        <button title='reset to a random number' onClick={ random }>⏻</button>
        <button title='increment randomly' onClick={ increment }>⍥</button>
      </div>
    ),
  }

  //  2nd part : input bar

  const inputRef = useRef< HTMLInputElement | null >(null) // Added useRef
  const [ input, displayInput ] = useState( defaultInput )

  let onChange = (/*e: React.ChangeEvent<HTMLInputElement>*/ /*Switching to useRef*/) => {

    // const value = e.target.value // Switching to useRef

    const value = inputRef.current?.value || ''  // Added for useRef

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
          id='input-field'
          placeholder={defaultInput}
          onChange={ onChange } 
          ref={inputRef} // Added for useRef
          >
        </input>
      </div>

      <div id='div-input-text' className='div-input-text' >
        <div className='div-input-text-content'>{ input }</div>
      </div>

    </>
  )
}

export default App
