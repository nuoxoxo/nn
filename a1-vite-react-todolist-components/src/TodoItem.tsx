import { InterfaceTodo } from './InterfaceTodo';

interface props extends InterfaceTodo {
  handleToggle: (id: string, checked: boolean) => void;
  handleDelete: (id: string) => void;
}

export function TodoItem({ id, title, checked, handleToggle, handleDelete }: props) {
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
