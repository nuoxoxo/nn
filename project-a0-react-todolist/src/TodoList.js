import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList ({ todos, toggleTodo }) {

  return (

    todos.map(item => {
      // console.log(item)
      return <TodoItem 
        key = { item.id }
        todo = { item }
        toggleTodo = { toggleTodo }
      />
    })
  )
}
