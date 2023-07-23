import { useState } from 'react'
import './styles/styles.css'

export default function App() {

  const [ newItem, setNewItem ] = useState('')
  const [ todos, setTodos ] = useState([])

  const handleSubmit = ( e: React.ChangeEvent<HTMLInputElement> ) => {

    e.preventDefault()

    setTodos( currentTodos => {
      return [...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          checked: false
        }
      ]
    })
  }

  return (

    <>
      <form className='new-item-form'
        onSubmit={ handleSubmit }
      >
        <div className='form-row new-item-form-row'>
          {/* <label htmlFor='item'>New Item</label> */}
          <input type='text' id='item' 
            value={ newItem }
            onChange={ e => setNewItem( e.target.value )} />
          <button className='btn btn-add-item'>+ Job</button>
        </div>
      </form>
      <h1 className='header'>Jobs</h1>
      <ul className='list'>
      todos.map( job => {
            return
            <li>
              <label><input type='checkbox' checked={ job.checked } />
                { job.title }
              </label>
              <button className='btn btn-delete'> del job </button>
            </li>
          })
      </ul>
    </>
  )
}