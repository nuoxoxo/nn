import React from 'react'
import { useState } from 'react' // hook
import { useRef } from 'react' // hook
import { useEffect } from 'react' // hook
import Todos from './Todos'

// import uuid from 'uuid/'
import { v4 as uuidv4 } from 'uuid'

// const [todos, setTodos] = useState([])
//    React Hook "useState" cannot be called at the top level. 
//    React Hooks must be called in a React function 
//    component or a custom React Hook function
 
const LOCAL_STORAGE_KEY = 'TodoApp.todos'

function TodoApp () {

  const [todos, setTodos] = useState([]) // Hook

  /*
  const [todos, setTodos] = useState([
    {id: 1, name: '1', checked: 'true'},
    {id: 2, name: '2', checked: 'false'},
    {id: 3, name: 'abc', checked: 'false'},
    {id: 4, name: 'xyz', checked: 'false'}
  ])
  */

  const todoNameRef = useRef()

  useEffect(() => { // for loading

    const storedTodos = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY ))
    if (storedTodos)
      setTodos( storedTodos )
  }, [])


  useEffect(() => { // for storing

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify( todos ))
  }, [todos])

  const handleAddTodo = (e) => {

    if (todoNameRef.current == undefined)
      return

    const name = todoNameRef.current.value
    if (name === '')
      return

    setTodos(prevTodos => {

      let id = uuidv4()
      console.log(id)
      return [
        ... prevTodos,
        {
          id: id,
          name: name,
          checked: false}
      ]
    })

    console.log(name)
    todoNameRef.current.value = null // clear input field
  }


  function handleClearTodos() {

    const newTodos = todos.filter(item => !item.checked)
    setTodos(newTodos)
  }


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }


  var toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(
      todo => todo.id === id
    )

    todo.checked = !todo.checked
    setTodos(newTodos)
  }

  return (
    <>
      {/* <Todos todos={todos}/> */}
      <Todos
        todos={ todos }
        toggleTodo={ toggleTodo }
      />

      <input
        type='text'
        ref={todoNameRef}
        onKeyDown={handleKeyDown}
        placeholder='type something here...'
      />

      <button onClick={ handleAddTodo }>
        + JOB
      </button>

      <button onClick={ handleClearTodos }>CLEAR</button>
      {/* <div>0 Jobs Pending</div> */}
      <div>
        {todos.filter(item => !item.checked).length} Jobs Pending
      </div>

    </>
  )
}

export default TodoApp;
