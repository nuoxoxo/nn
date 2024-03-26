import { useState } from 'react'
import './App.css'

function App() {

  const stageNames = ["Idea", "Dev.", "Test", "Depl"];

  const [Input, setInput] = useState('')
  const [ Stages, setStages] = useState<string[][]>([
    [],
    ['dvpt'],
    ['test'],
    ['dep']
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
      setStages([
        [ ... Stages[0], Input],
        ... Stages.slice(1)//Stages[1], Stages[2], Stages[3]])
      ])
      setInput('')
    }
  }

  const handleShortPress = ( idxStage: number, idxStuff: number ) => {
    const N = Stages.length
    if ( idxStage < N ) {
      const res = [ ... Stages]
      const node: string = Stages[idxStage][idxStuff]
      res[ idxStage ].splice(idxStuff, 1)
      if ( idxStage < N - 1 )
        res[ idxStage + 1 ].push( node )
      setStages( res )
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
          <div key={index} className={`assembly-line-child stage-${index + 1}`}>
            <h2>{stageNames[index]}</h2>
            {stage.map((el, idx) => (
              <button 
                key={idx}
                onClick={() => handleShortPress( index, idx )}
              >
                {el}
              </button>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
