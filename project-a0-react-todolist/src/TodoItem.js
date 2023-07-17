import React from 'react'

export default function TodoItem ({ todo, toggleTodo /*2nd arg is a func*/ }) {

  var handleTodoCheck = () => {

    toggleTodo(todo.id)
  }

  return (

    <div>
      <label>
        <input
          type='checkbox'
          checked={ todo.checked }
          onChange={ handleTodoCheck }
        />
        { todo.name }
      </label>
    </div>
  )
}
