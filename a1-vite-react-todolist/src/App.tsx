import { useState, useEffect } from 'react'

const App = () => {

  const [ bgc, setBGC ] = useState('')


  const getRandomColor = (): string => {

    const hex: string = '0123456789ABCDEF'
    let res: string = '#'
    let i: number = -1
    while (++i < 6)
      res += hex[Math.floor(Math.random() * 9)] // changed from 16 to favor more contrast
    return res
  }


  const getOppositeColor = (color: string): string => {

    color = color.slice(1) // pop the '#'
    const rgb = parseInt(color, 16) // rgb <- hex
    const white = 0xffffff
    const invertedColor = '#' + (white - rgb).toString(16).padStart(6, '0');
    return invertedColor
  }


  useEffect( () => {

    const c = getRandomColor()
    const c_oppo = getOppositeColor(c)

    setBGC(c)

    document.body.style.backgroundColor = c
    document.body.style.color = c_oppo
  }, []) // strange syntax


  return (
    <>
      <div style={{ backgroundColor: bgc }}>
        <form id='new-item-form' className='new-item-form'>
          <div className='form-row'>
            <label htmlFor='item'> (null) </label>
            <input id='item' type='text' />
            <button className='btn'> add a job </button>
          </div>
        </form>
        <h1 className='jobs-header'> Jobs </h1>
        <ul className='list'>
          <li>
            <label>
              <input type='checkbox' />
              item 1
            </label>
            <button className='btn btn-alert'>
              delete
            </button>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              item 2
            </label>
            <button className='btn btn-alert'>
              delete
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
