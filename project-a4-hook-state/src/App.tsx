function App() {

  let count: number = Math.floor(Math.random() * 2147483648)
  let increment = () => { ++count }
  let decrement = () => { --count }
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
