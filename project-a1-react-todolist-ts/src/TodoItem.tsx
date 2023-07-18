// import React from 'react'


//  ADDED
interface Todo {
  // Define the properties of your Todo type here
  // For example: id, text, completed, etc.
}


//  ADDED
interface TodoItemProps {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
}


// export default function TodoItem ({ todo, toggleTodo, /*Added a DELETE button*/ deleteTodo }) {
export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps ) {

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
