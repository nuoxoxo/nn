import { useState, useEffect } from 'react'
import { getRandomColor, getOppositeColor } from './GetColor.tsx'

const App = () => {

  let [ bgc, setBGC ] = useState( getRandomColor() )

  useEffect( () => {

    const c_oppo = getOppositeColor(bgc)

    setBGC(bgc)

    document.body.style.backgroundColor = bgc
    document.body.style.color = c_oppo
  }, []) // useEffect() : strange syntax

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {

    e.preventDefault();
  }

  return (
    <>
      <div>
        <div className='new-item-form-div'>
          <form id='new-item-form'
            className='new-item-form'
            onSubmit={ handleSubmit }
          >
            <div className='form-row'>
              <label htmlFor='item'> (null) </label>
              <input id='item' type='text' />
              <button className='btn'> add a job </button>
            </div>
          </form>
        </div>
        <h1 className='jobs-header'> Jobs </h1>
        <ul className='list'>
          <li>
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
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
