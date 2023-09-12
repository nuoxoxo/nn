import { useState, useEffect } from 'react'
import './styles/App.scss'
import { GetRandomDateString } from "./helpers/Helpers"

const App = () => {
  const [RandomDateArray, setRandomDateString] = 
    useState<[number, string, number, number]>(GetRandomDateString())
  const [GuessVal, setGuessVal] = useState</*number | */string>('')
  const [GuessRes, setGuessRes] = useState<string>('')


  const temp = localStorage.getItem("LabelIsChecked");
  const tempLabelIsChecked = temp ? JSON.parse(temp) : false;
  const [LabelIsChecked, setLabelIsChecked] = useState(tempLabelIsChecked);

  const handleSetLabelIsChecked = () => {
    setLabelIsChecked(!LabelIsChecked)
    console.log(LabelIsChecked)
  }
  const EvaluateGuess = (val: number) => {
    if (val === 7) {
      val = 0
    }
    if (val === RandomDateArray[0]) {
      setGuessRes('🟢')
    } else {
      setGuessRes('🔴')
    }
  }

  /*
  const handleOnEnterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    console.log('set before evaluating: ', val)
    setGuessVal(val)
  }
  */

  const handleButtonClick = (n: number | string) => {
    console.log(n)
    setGuessVal(
      n == '日' ? '7' : n.toString()
    )
  }

  // const setRandomDateString = () => {
  //   const newRandomDateArray = GetRandomDateString()
  //   setGuessVal('')
  //   setGuessRes('')
  //   let i = 0
  //   console.log(newRandomDateArray)
  //   while (++i < 4) {
  //     RandomDateArray[i] = newRandomDateArray[i]
  //   }
  // }

  const handleReset = () => {
    setRandomDateString(GetRandomDateString())
    setGuessVal('')
    setGuessRes('')
  }

  useEffect(() => {
    // EvaluateGuess(GuessVal) // bug
    if (GuessVal) {
      EvaluateGuess(parseInt(GuessVal))
    }

    //  Night mode
    document.body.style.backgroundColor = LabelIsChecked ? 'white' : 'black';
    document.body.style.color = LabelIsChecked ? 'black' : 'white';

    localStorage.setItem("LabelIsChecked", JSON.stringify(LabelIsChecked))
  }, [GuessVal, LabelIsChecked])
  

  return (
    <>
      <h1 className='QuestionDiv'>
        { `${RandomDateArray[1]} ${RandomDateArray[2]}, ${RandomDateArray[3]}` }
      </h1>
      <div className='GuessingDiv'>
        <label className='label-text-guess-bar' htmlFor='GuessBar'>Your Guess:</label>
        {/* <input id='GuessBar' type='number' onChange={handleOnEnterInput}/> */}
        &nbsp;
        <div> { GuessRes } </div>
      </div>
      <div className='btn-group-div'>
        {[1, 2, 3, 4, 5, 6, '日'].map((n) => (
          <button key={ n } onClick={() => handleButtonClick(n)}>
            {n}
          </button>
        ))}
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSetLabelIsChecked }>夜</button>
      </div>
      {/* <label className="switch">
        <input 
          type="checkbox"
          onChange={handleSetLabelIsChecked}
          checked={LabelIsChecked}
        />
        <span className="slider"></span>
      </label> */}
    </>
  )
}

export default App 
