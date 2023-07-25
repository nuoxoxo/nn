import { useState } from "react";

interface NewItemFormProps {

  addTodo: (title: string) => void;
  handleClear: () => void; // Crucial line
}

const NewItemForm = (props: NewItemFormProps) => {

  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault(); // prevent page to refresh
    if (newItem === "") {
      return;
    }
    props.addTodo(newItem);
    setNewItem("");
  };

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
