import { useState } from 'react'
import './App.css'

function App() {

  const [Input, setInput] = useState('')
  const [ Stages, setStages] = useState([
    [],
    [],
    [],
    []
  ])

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
      setStages([[...Stages[0], Input], Stages[1], Stages[2], Stages[3]])
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
        {Stages.map((stage, index) => (
          <div key={index} className={`assembly-line-child stage-${index}`}>
            {stage.map((el, idx) => (
              <button key={idx}>{el}</button>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
