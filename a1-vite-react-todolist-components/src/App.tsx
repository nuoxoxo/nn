import { useState, useEffect } from "react"
import { getRandomColor, getOppositeColor, setBtnTextColor } from "./GetColor"
import { InterfaceTodo } from "./InterfaceTodo"
import { TodoList } from "./TodoList"
import { NewItemForm } from "./NewItemForm"

const App = () => {
  const [bgc, setBGC] = useState(getRandomColor())
  const [todos, setTodos] = useState<InterfaceTodo[]>(() => {
    const localValue = localStorage.getItem('ITEMS')
    return localValue ? JSON.parse(localValue) : []
  })

  const addTodo = (title: string) => {
    setTodos((currentTodos) => {
      if (title === "") return [...currentTodos]
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          checked: false,
        },
      ]
    })
  }

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    const bcgOppo = getOppositeColor(bgc)
    setBGC(bgc)
    document.body.style.backgroundColor = bgc
    document.body.style.color = bcgOppo

    setBtnTextColor(bcgOppo)
  }, [bgc])

  const handleToggle = (id: string, checked: boolean) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, checked } : todo
      )
    )
  }

  const handleDelete = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  const handleClear = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.checked))
  }

  return (
    <>
      <div className="the-whole-thing-div-is-it-flex">
        <NewItemForm addTodo={addTodo} handleClear={handleClear} />
        <h1 className="jobs-header"> Jobs </h1>
        
        {todos.length === 0 ? (
          <span className='empty-emoji'>
            🈳️
          </span>
        ) : (
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </>
  )
}

export default App
