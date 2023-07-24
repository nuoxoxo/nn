import { useState, useEffect } from 'react'
import { getRandomColor, getOppositeColor, setBtnTextColor } from './GetColor'
import { Todo } from './InterfaceTodo'

const App = () => {

  const [ bgc, setBGC ] = useState( getRandomColor() )
  const [ newItem, setNewItem ] = useState( '' )
  const [ todos, setTodos ]= useState<Todo []>( [] )


  useEffect( () => {

    const bcgOppo = getOppositeColor( bgc )
    setBGC( bgc )
    document.body.style.backgroundColor = bgc
    document.body.style.color = bcgOppo

    setBtnTextColor( bcgOppo ) 

  }, [ bgc ]) // useEffect() : strange syntax
  // with or without bgc inside [] Will work


  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault() // prevent page to refresh

    setTodos( (currentTodos: Todo[]) => {

      if (newItem === '')
        return [...currentTodos]
      return [...currentTodos, {
        id: crypto.randomUUID(),
        title: newItem,
        checked: false
      }]
    })

    setNewItem('')
  }

  const handleToggle = ( id: string, checked: boolean ) => {

    setTodos( currentTodos => {
      return currentTodos.map( todo => {
        if (id === todo.id) {
          return { ...todo, checked }
        }
        return todo
      })
    })
  }

  const handleDelete = ( id: string ) => {

    setTodos( currentTodos => {
      return currentTodos.filter( todo =>
        id !== todo.id)
    })
  }

  const handleClear = () => {

    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => 
        !todo.checked);
    })
  }

  return (
    <>
      <div className='the-whole-thing-div-is-it-flex'>
        <div className='new-item-form-div'>
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
        </div>
        <h1 className='jobs-header'> Jobs </h1>
        <ul className='list'>
          { todos.map((todo) => (
              <li key={ todo.id }>
                <button className='btn btn-alert'
                  onClick={ () => handleDelete(todo.id) }>
                  delete
                </button>
                <label>
                  <input type='checkbox'
                    checked={ todo.checked }
                    onChange={ e => { handleToggle( todo.id, e.target.checked ) }}
                  />
                  { todo.title }
                </label>         
              </li>
            ))
          }
          {/* <li>
            <button className='btn btn-alert'>
              delete
            </button>
            <label>
              <input type='checkbox' />
              item one
            </label>         
          </li>
          <li>
            <button className='btn btn-alert'>
              delete
            </button>
            <label>
              <input type='checkbox' />
              item two
            </label>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default App
