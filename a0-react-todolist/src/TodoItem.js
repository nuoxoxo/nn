import React from 'react'

export default function TodoItem ({ todo, toggleTodo, /*Added a DELETE button*/ deleteTodo }) {

  var handleTodoCheck = () => {

    toggleTodo(todo.id)
  }

  return (

    <div className='todoitem'>

      <button onClick={ () => deleteTodo( todo.id )} className="btn-delete-job"> ✖ </button>
      <label>
        <input
          type='checkbox'
          checked={ todo.checked }
          onChange={ handleTodoCheck }
        />
        <span className='todoitem-text'>
          { todo.name }
        </span>
      </label>
    </div>
  )
}
