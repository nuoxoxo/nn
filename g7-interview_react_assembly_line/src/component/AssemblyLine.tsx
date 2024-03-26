import { useRef, useState } from 'react'
import './AssemblyLine.scss'

interface AssemblyLineProps {
  stages: string[];
}

// const AssemblyLine = () => {
const AssemblyLine: React.FC<AssemblyLineProps> = ({ stages }) => {

  const stageNames = ["Idea", "Dev.", "Test", "Depl"];

  const countLongPressTimeout = useRef<number | null>( null )
  const [Input, setInput] = useState('')
  const [ Stages, setStages] = useState<string[][]>(
    stages.map(() => [])
  )

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

  // Short press

  const handleShortPress = ( idxStage: number, idxStuff: number ) => {
    const N = Stages.length
    const res: string[][] = [ ... Stages]
    const node: string = Stages[idxStage][idxStuff]
    res[ idxStage ].splice(idxStuff, 1)
    if ( idxStage < N - 1 ) {
      res[ idxStage + 1 ].push( node )
    }
    setStages( res )
  }

  // Long press

  const handleLongress = ( idxStage: number, idxStuff: number ) => {
    const res: string[][] = [ ... Stages]
    const node: string = Stages[idxStage][idxStuff]
    res[ idxStage ].splice(idxStuff, 1)
    if ( idxStage > 0 ) {
      res[ idxStage - 1 ].push( node )
    }
    setStages(res)
  }

  const handleMouseDown = ( idxStage: number, idxStuff: number ) => {
    countLongPressTimeout.current = setTimeout(
      () => {
        handleLongress( idxStage, idxStuff )
      },500)
  }

  const handleMouseUp = () => {
    if (countLongPressTimeout.current) {
      clearTimeout(countLongPressTimeout.current)
    }
  }

  return (
    <>
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
                onMouseDown={() => handleMouseDown( index , idx )}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
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

export default AssemblyLine
