import './styles.css'

export default function App() {
  return  <form className='new-item-form'>
    'Hello, World!'
    <div className='form-row new-item-form-row'>
      <label htmlFor='item'>New Item</label>
      <input type='text' id='item' />
    </div>
  </form>
}