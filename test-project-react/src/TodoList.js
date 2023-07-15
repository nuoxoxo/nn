import React from 'react'
import Todo from './Todo'

export default function TodoList ({ todos, toggleTodo }) {

  return (
    todos.map(item => {
      console.log(item)
      return <Todo 
        key = { item.id }
        todo = { item }
        toggleTodo = { toggleTodo }
      />
    })
  )
}
