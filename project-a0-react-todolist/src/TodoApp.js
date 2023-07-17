import React from 'react'
import { useState, useRef, useEffect } from 'react' // hook

import { v4 as uuidv4 } from 'uuid'
// ( depr : ) import uuid from 'uuid/'

import TodoList from './TodoList'
import './styles.css'

// const [todos, setTodos] = useState([])
//  - React Hook "useState" cannot be called at the top level. 
//    React Hooks must be called in a React function 
//    component or a custom React Hook function
 
const LOCAL_STORAGE_KEY = 'TodoApp.todos'

function TodoApp () {

  /*
  const [todos, setTodos] = useState([
    {id: 1, name: '1', checked: 'true'},
    {id: 2, name: '2', checked: 'false'},
    {id: 3, name: 'abc', checked: 'false'},
    {id: 4, name: 'xyz', checked: 'false'}
  ])
  */

  const [todos, setTodos] = useState( [] )  //  Hook
  const todoNameRef = useRef()  //  Hook  

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

  var toggleTodo = ( id ) => {

    const arr = [ ...todos ]
    const todo = arr.find(
      todo => todo.id === id
    )
    todo.checked = !todo.checked
    setTodos( arr )
  }


  // NEW !!! - Added a DELETE button
  var deleteTodo = ( id ) => {
    console.log( 'click' )
    const arr = [ ...todos ].filter( job => job.id !== id )
    setTodos(arr)
  }


  return (

    <>

      <div className='pending-jobs-counter'>
        <div>
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
          { todos.filter(item => !item.checked).length } Jobs Pending
        </div>
      </div>

      <input
        type='text'
        ref={ todoNameRef }
        onKeyDown={ handleKeyDown }
        placeholder='type something ...'
      />

      <button 
        onClick={ handleAddTodo }
      >
        + JOB
      </button>

      <button
        onClick={ handleClearTodos }
      >
        - All
      </button>

      <TodoList
        todos={ todos }
        toggleTodo={ toggleTodo }
        deleteTodo={ deleteTodo }
      />
    </>
  )
}

export default TodoApp;