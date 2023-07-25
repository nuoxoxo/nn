import { InterfaceTodoList } from './InterfaceTodo'
import { TodoItem } from './TodoItem'

interface TodoListProps extends InterfaceTodoList {
  handleToggle: (id: string, checked: boolean) => void;
  handleDelete: (id: string) => void;
}

export function TodoList({ todos, handleToggle, handleDelete }: TodoListProps) {
  return (
    <ul className="list">
      {todos.length === 0 && "🈳️🈳️🈳️"} {/* short circuit */}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}