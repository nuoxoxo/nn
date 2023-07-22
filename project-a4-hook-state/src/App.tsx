import React from "react"

function App() {

  let count: number = Math.floor(Math.random() * 2147483648)
  let increment = () => { ++count, console.log('++', count) }
  let decrement = () => { --count, console.log('--', count) }

  console.log( 'App', count )

  return (
    <>

      <div>
        <button onClick={ increment }>+</button>
        <button onClick={ decrement }>-</button>
      </div>

      <div>{ count }</div>

      <div>
        <button onClick={ decrement }>-</button>
        <button onClick={ increment }>+</button>
      </div>

    </>
  )
}

export default App
