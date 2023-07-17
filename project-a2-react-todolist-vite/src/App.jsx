import './styles.css'

export default function App() {
  return (  
    <>
      <form className='new-item-form'>
        <div className='form-row new-item-form-row'>
          {/* <label htmlFor='item'>New Item</label> */}
          <input type='text' id='item' />
          <button className='btn btn-add-item'>+ Job</button>
        </div>
      </form>
      <h1 className='header'>Jobs</h1>
      <ul className='list'>

        <li>
          <label><input type='checkbox' /> job one </label>
          <button className='btn btn-delete'> del job </button>
        </li>

        <li>
          <label><input type='checkbox' /> job 2 </label>
          <button className='btn btn-delete'> del job </button>
        </li>

      </ul>
    </>
  )
}