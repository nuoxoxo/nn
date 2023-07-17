import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList ({ todos, toggleTodo }) {

  return (

    <div className='todolist'> {
      todos.map(item =>
        // console.log(item)
        <TodoItem
          key = { item.id }
          todo = { item }
          toggleTodo = { toggleTodo }
        />
      )
    }
    </div>
  )
}
