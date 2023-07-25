import { InterfaceTodo } from './InterfaceTodo';

interface TodoItemProps extends InterfaceTodo {
  handleToggle: (id: string, checked: boolean) => void;
  handleDelete: (id: string) => void;
}

export function TodoItem({ id, title, checked, handleToggle, handleDelete }: TodoItemProps) {
  return (
    <li>
      <button
        className="btn btn-alert"
        onClick={ () => handleDelete(id) }
      >
        delete
      </button>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={ e => { handleToggle(id, e.target.checked) }}
        />
        {title}
      </label>
    </li>
  );
}
