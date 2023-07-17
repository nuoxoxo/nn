import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList ({ 
  todos, toggleTodo, /*Added a DELETE button*/ deleteTodo }) {

  return (

    <div className='todolist'> {
      todos.map(item =>
        // console.log(item)
        <TodoItem
          key = { item.id }
          todo = { item }
          toggleTodo = { toggleTodo }
          deleteTodo = { deleteTodo } // Added a DELETE button
        />
      )
    }
    </div>
  )
}
