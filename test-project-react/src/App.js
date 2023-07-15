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

  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
