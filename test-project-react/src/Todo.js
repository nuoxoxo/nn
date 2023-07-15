import React from 'react'

export default function Todo ({ todo, toggleTodo /*2nd arg is a func*/ }) {

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
        {todo.name}
      </label>
    </div>
    // <div>{ todo }</div>
  )
}
