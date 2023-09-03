import { useState, useEffect } from 'react'
import './styles/App.scss'
import { GetRandomDateString } from "./helpers/Helpers";

const App = () => {
  const [RandomDateArray/*, setRandomDateString*/] = 
    useState<[number, string, number, number]>(GetRandomDateString())
  const [GuessVal, setGuessVal] = useState</*number | */string>('');
  const [GuessRes, setGuessRes] = useState<string>('');

  const EvaluateGuess = (val: number) => {
    if (val === RandomDateArray[0]) {
      setGuessRes('yes')
    } else {
      setGuessRes('no')
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    console.log('set before evaluating: ', val)
    setGuessVal(val)
  }

  useEffect(() => {
    // EvaluateGuess(GuessVal) // bug
    if (GuessVal) {
      EvaluateGuess(parseInt(GuessVal))
    }
  }, [GuessVal])
  

  return (
    <>
      <h1 className='QuestionDiv'>
        { `${RandomDateArray[1]} ${RandomDateArray[2]}, ${RandomDateArray[3]}` }
      </h1>
      <div className='GuessingDiv'>
        <label htmlFor='GuessBar'>Your Guess: </label>
        <input id='GuessBar' type='number' onChange={handleOnChange}/>
      </div>
      <div>
        { GuessRes }
      </div>
    </>
  )
}

export default App 
