import { useState, useEffect } from "react"
import { getRandomColor, getOppositeColor, setBtnTextColor } from "./GetColor"
import { InterfaceTodo, InterfaceTodoList } from "./InterfaceTodo"
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
      }
    })
  }

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
        {/* <div className='new-item-form-div'>
          <form id='new-item-form'
            className='new-item-form'
            onSubmit={ handleSubmit }
          >
            <div className='form-row'>
              <button onClick={ handleClear } className='btn btn-clear'>
                Clear
              </button>
              <label htmlFor='item'> (null) </label>
              <input id='item' type='text'
                placeholder='add a job...'
                value={ newItem }
                onChange={ e =>  setNewItem( e.target.value )}
              />
              <button className='btn'> add a job </button>

            </div>

          </form>
        </div> */}
        <h1 className="jobs-header"> Jobs </h1>
        <TodoList todos={ todos.todos } />
      </div>
    </>
  )
}

export default App
