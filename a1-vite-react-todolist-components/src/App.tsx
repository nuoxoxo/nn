import { useState, useEffect } from "react"
import { getRandomColor, getOppositeColor, setBtnTextColor } from "./GetColor"
import { InterfaceTodoList } from "./InterfaceTodo"
import { TodoList } from "./TodoList"
import { NewItemForm } from "./NewItemForm"

const App = () => {
  const [bgc, setBGC] = useState(getRandomColor())
  // const [ todos, setTodos ]= useState<InterfaceTodoList>( [] )
  const [todos, setTodos] = useState<InterfaceTodoList>({ todos: [] })

  const addTodo = (title: string) => {
    setTodos((currentTodos: InterfaceTodoList) => {
      if (title === "") return { ...currentTodos }
      return {
        todos: [
          ...currentTodos.todos,
          {
            id: crypto.randomUUID(),
            title,
            checked: false,
          },
        ],
      }
    })
  }

  useEffect(() => {
    const bcgOppo = getOppositeColor(bgc)
    setBGC(bgc)
    document.body.style.backgroundColor = bgc
    document.body.style.color = bcgOppo

    setBtnTextColor(bcgOppo)
  }, [bgc]) // useEffect() : strange syntax
  // with or without bgc inside [] Will work

  // const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {

  //   e.preventDefault() // prevent page to refresh

  //   setTodos( (currentTodos: Todo[]) => {

  //     if (newItem === '')
  //       return [...currentTodos]
  //     return [...currentTodos, {
  //       id: crypto.randomUUID(),
  //       title: newItem,
  //       checked: false
  //     }]
  //   })

  //   setNewItem('')
  // }

  // const handleToggle = ( id: string, checked: boolean ) => {

  //   setTodos( currentTodos => {
  //     return currentTodos.map( todo => {
  //       if (id === todo.id) {
  //         return { ...todo, checked }
  //       }
  //       return todo
  //     })
  //   })
  // }

  // const handleDelete = ( id: string ) => {

  //   setTodos( currentTodos => {
  //     return currentTodos.filter( todo =>
  //       id !== todo.id)
  //   })
  // }

  // const handleClear = () => {

  //   setTodos((currentTodos) => {
  //     return currentTodos.filter((todo) =>
  //       !todo.checked)
  //   })
  // }

  const handleToggle = (id: string, checked: boolean) => {
    setTodos((currentTodos) => {
      return {
        todos: currentTodos.todos.map((todo) => {
          if (id === todo.id) {
            return { ...todo, checked }
          }
          return todo
        }),
      }
    })
  }

  const handleDelete = (id: string) => {
    setTodos((currentTodos) => {
      return {
        todos: currentTodos.todos.filter((todo) => id !== todo.id),
      };
    });
  };
  

  const handleClear = () => {
    setTodos((currentTodos) => {
      return {
        todos: currentTodos.todos.filter((todo) => !todo.checked),
      }
    })
  }

  return (
    <>
      <div className="the-whole-thing-div-is-it-flex">
        <NewItemForm addTodo={addTodo} handleClear={handleClear} />
        <h1 className="jobs-header"> Jobs </h1>
        <TodoList todos={todos.todos} handleToggle={handleToggle} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
