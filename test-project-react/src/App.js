import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Todos from './Todos'

function App () {

  const [todos, setTodos] = useState([])
  /*
  const [todos, setTodos] = useState([
    {id: 1, name: '1', checked: 'true'},
    {id: 2, name: '2', checked: 'false'},
    {id: 3, name: 'abc', checked: 'false'},
    {id: 4, name: 'xyz', checked: 'false'}
  ])
  */

  const todoNameRef = useRef()

  const handleAddTodo = (e) => {

    if (todoNameRef.current == undefined)
      return
    const name = todoNameRef.current.value
    if (name === '')
      return
    console.log(name)
    todoNameRef.current.value = null // clear input field
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <>
      <Todos todos={todos}/>

      <input
        type='text'
        ref={todoNameRef}
        onKeyDown={handleKeyDown}
        placeholder='type something here...'
      />

      <button onClick={ handleAddTodo }>
        + JOB
      </button>

      <button>CLEAR</button>
      <div>0 Jobs Pending</div>

    </>
  )
}

export default App;
