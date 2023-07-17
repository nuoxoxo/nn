import React from 'react'

export default function TodoItem ({ todo, toggleTodo, /*Added a DELETE button*/ deleteTodo }) {

  var handleTodoCheck = () => {

    toggleTodo(todo.id)
  }

  return (

    <div>

      <button onClick={ () => deleteTodo( todo.id )} className="btn-delete-job">
        - Del
      </button>

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
