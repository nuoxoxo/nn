import { useState } from 'react'
import './App.css'

function App() {

  const [Input, setInput] = useState('')
  const [Ideas, setIdeas] = useState([])
  const [Development/*, setDevelopment*/] = useState(['some_dev'])
  const [Testing/*, setTesting*/] = useState(['some_test'])
  const [Deployment/*, setDeployment*/] = useState(['some_deploy'])

  const handleSetInput = (event: any) => {
    setInput( event.target.value )
  }

  const handlePressReturn = (event: any) => {
    if (event.key === 'Enter') {
      handleConfirmInput();
    }
  }

  const handleConfirmInput = () => {
    if (Input.trim() !== '') {
      setIdeas([
        ... Ideas,
        Input,
      ])
      setInput('')
    }
  }

  return (
    <>
      <h1>Assembly Line Component</h1>

      <div className='input-wrapper' style={{display:'flex',justifyContent:'center'}}>
        <input type='text' 
          value={Input}
          onChange={handleSetInput}
          onKeyPress={handlePressReturn}
        ></input>
        <button onClick={handleConfirmInput}>insert</button>
      </div>
      <div className='assembly-line-wrapper' >
        <div className='Ideas assembly-line-child'> {
          Ideas.map((el, idx) => (
            <button key={idx}>
              { el }
            </button>
          ))
        }</div>
        <div className='Development assembly-line-child'> {
          Development.map((el, idx) => (
            <button key={idx}>
              { el }
            </button>
          ))
        }</div>
        <div className='Testing assembly-line-child'> {
          Testing.map((el, idx) => (
            <button key={idx}>
              { el }
            </button>
          ))
        }</div>
        <div className='Deployment assembly-line-child'> {
          Deployment.map((el, idx) => (
            <button key={idx}>
              { el }
            </button>
          ))
        }</div>
      </div>
    </>
  )
}

export default App
