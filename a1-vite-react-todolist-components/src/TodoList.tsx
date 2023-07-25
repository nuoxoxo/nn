import { InterfaceTodoList } from './InterfaceTodo'

export function TodoList({todos}: InterfaceTodoList) {
  return (
    <ul className="list">
      {todos.length === 0 && "🈳️🈳️🈳️"} {/* short circuit */}
      {todos.map((todo) => (
        <li key={todo.id}>
          <button
            className="btn btn-alert"
            //   onClick={ () => handleDelete(todo.id) }
          >
            delete
          </button>
          <label>
            <input
              type="checkbox"
              checked={todo.checked}
              // onChange={ e => { handleToggle( todo.id, e.target.checked ) }}
            />
            {todo.title}
          </label>
        </li>
      ))}
    </ul>
  )
}


