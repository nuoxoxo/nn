import { useState } from "react";
// import { Todo } from './InterfaceTodo'

interface NewItemFormProps {
  addTodo: (title: string) => void;
  handleClear: () => void; // Crucial line
}

const NewItemForm = (props: NewItemFormProps) => {
  const [newItem, setNewItem] = useState("");
  // const [ todos, setTodos ]= useState<Todo []>( [] )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page to refresh

    // setTodos( (currentTodos: Todo[]) => {

    //   if (newItem === '')
    //     return [...currentTodos]
    //   return [...currentTodos, {
    //     id: crypto.randomUUID(),
    //     title: newItem,
    //     checked: false
    //   }]
    // })

    if (newItem === "") {
      return;
    }

    props.addTodo(newItem);
    setNewItem("");
  };

  // const handleClear = () => {

  //     // props.addTodo((currentTodos) => {
  //     //     return currentTodos.filter((todo) =>
  //     //     !todo.checked);
  //     // })
  //     setTodos( (currentTodos) =>
  //         currentTodos.filter( (todo) =>
  //             !todo.checked
  //         )
  //     )
  // }

  const handleClear = () => {
    props.handleClear();
  };

  return (
    <div className="new-item-form-div">
      <form
        id="new-item-form"
        className="new-item-form"
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <button onClick={handleClear} className="btn btn-clear">
            Clear
          </button>
          <label htmlFor="item"> (null) </label>
          <input
            id="item"
            type="text"
            placeholder="add a job..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="btn"> add a job </button>
        </div>
      </form>
    </div>
  );
};

export { NewItemForm };
