import { InterfaceTodo } from "./InterfaceTodo"
import { TodoItem } from "./TodoItem"

interface TodoListProps {
  todos: InterfaceTodo[]
  handleToggle: (id: string, checked: boolean) => void
  handleDelete: (id: string) => void
}

export function TodoList({ todos, handleToggle, handleDelete }: TodoListProps) {
  return (
    <ul className="list">
      {/* {todos.length === 0 && "🈳️🈳️🈳️"} short circuit */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}
