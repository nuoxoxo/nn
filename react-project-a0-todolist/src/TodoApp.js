import React from 'react'
import { useState } from 'react' // hook
import { useRef } from 'react' // hook
import { useEffect } from 'react' // hook
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid' // ( depr : ) import uuid from 'uuid/'

import './styles.css'

// const [todos, setTodos] = useState([])
//  - React Hook "useState" cannot be called at the top level. 
//    React Hooks must be called in a React function 
//    component or a custom React Hook function
 
const LOCAL_STORAGE_KEY = 'TodoApp.todos'
const BUTTON_FONT = 'Courier'
// const TODO_STYLE = 'display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh;'

function TodoApp () {

  const [todos, setTodos] = useState( [] ) // Hook
  /*
  const [todos, setTodos] = useState([
    {id: 1, name: '1', checked: 'true'},
    {id: 2, name: '2', checked: 'false'},
    {id: 3, name: 'abc', checked: 'false'},
    {id: 4, name: 'xyz', checked: 'false'}
  ])
  */
  const todoNameRef = useRef() // Hook  

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

    if (todoNameRef.current === undefined || todoNameRef.current.value === '')
      return
    const name = todoNameRef.current.value
    setTodos(prevTodos => {
      let id = uuidv4()
      return [
        ...prevTodos,
        {
          id: id,
          name: name,
          checked: false
        }
      ]
    })
    // console.log(name)
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
      {/* <TodoList todos={todos}/> */}
      <TodoList
        todos={ todos }
        toggleTodo={ toggleTodo }
      />

      <input
        type='text'
        ref={ todoNameRef }
        onKeyDown={ handleKeyDown }
        placeholder='type something ...'
      />

      <button 
        onClick={ handleAddTodo }
        style={{ fontFamily: BUTTON_FONT }}
      >
        + JOB
      </button>

      <button
        onClick={ handleClearTodos }
        style={{ fontFamily: BUTTON_FONT }}
      >
        - All
      </button>

      {/* Draft :: */}
      {/* <div>0 Jobs Pending</div> */}

      {/* does not seem to work :: */}
      {/* <div style={{ TODO_STYLE }}> {} */}
      <div>&nbsp;&nbsp;&nbsp;&nbsp;
        { todos.filter(item => !item.checked).length } Jobs Pending
      </div>
    </>
  )
}

export default TodoApp;
