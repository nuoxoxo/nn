import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList'

function App() {

  const [todos, setTodos] = useState(['1', '2', 'abc', 'xyz'])
  return (
    <>
      <TodoList todos={todos}/>
      <input type='text' placeholder='type something here...'/>
      <button>+ JOB</button>
      <button>CLEAR</button>
      <div>0 Jobs Pending</div>
    </>
  )
}

export default App;
