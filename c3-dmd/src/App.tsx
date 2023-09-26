import { useState, useEffect } from 'react'
import './styles/App.scss'
import { GetRandomDateString } from "./helpers/Helpers"

const App = () => {
  const [RandomDateArray, setRandomDateString] = 
    useState<[number, string, number, number]>(GetRandomDateString())
  const [GuessVal, setGuessVal] = useState</*number | */string>('')
  // const [GuessRes, setGuessRes] = useState<string>('')
  const [GuessRes, setGuessRes] = useState<boolean | null>(null)


  const temp = localStorage.getItem("LabelIsChecked");
  const tempLabelIsChecked = temp ? JSON.parse(temp) : false;
  const [LabelIsChecked, setLabelIsChecked] = useState(tempLabelIsChecked);

  const handleSetLabelIsChecked = () => {
    setLabelIsChecked(!LabelIsChecked)
    // console.log(LabelIsChecked)
  }
  const EvaluateGuess = (val: number) => {
    if (val === 7) {
      val = 0
    }
    // console.log(val, RandomDateArray[0], val === RandomDateArray[0], GuessRes)
    // if (val === RandomDateArray[0]) {
    //   setGuessRes(true)
    // } else {
    //   setGuessRes(false)
    // }
    setGuessRes(val === RandomDateArray[0])
    // console.log(val, RandomDateArray[0], val === RandomDateArray[0], GuessRes)
    if (GuessRes != null) {
      document.body.style.backgroundColor = GuessRes ? 'green' : 'red';
      // console.log(document.body.style.backgroundColor, 'guess: ', GuessRes)
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
    // console.log(n)
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
    setGuessRes( null )
    document.body.style.backgroundColor = LabelIsChecked ? 'white' : 'black';
    document.body.style.color = LabelIsChecked ? 'black' : 'white';
  }

  useEffect(() => {
    // EvaluateGuess(GuessVal) // bug
    if (GuessVal) {
      EvaluateGuess(parseInt(GuessVal))
    }

    //  Night mode switch
    const temp_color = document.body.style.backgroundColor
    // console.log(temp_color)
    if ( !temp_color || temp_color == 'white' || temp_color == 'black') {
      document.body.style.backgroundColor = LabelIsChecked ? 'white' : 'black';
      document.body.style.color = LabelIsChecked ? 'black' : 'white';
    }

    

    localStorage.setItem("LabelIsChecked", JSON.stringify(LabelIsChecked))
  }, [GuessRes, GuessVal, LabelIsChecked])
  

  return (
    <>
      <h1 className='QuestionDiv'>
        { `${RandomDateArray[1]} ${RandomDateArray[2]}, ${RandomDateArray[3]}` }
      </h1>
      <div className='GuessingDiv'>
        {/* <label className='label-text-guess-bar' htmlFor='GuessBar'>Your Guess:</label> */}
        {/* <input id='GuessBar' type='number' onChange={handleOnEnterInput}/> */}
        {/* &nbsp; */}
        {/* <div> { GuessRes } </div> */}
      </div>
      <div className='btn-group-div'>
        <div className='btn-subgroup-div'>
          {[1, 2, 3].map((n) => (
            <button key={ n } onClick={() => handleButtonClick(n)}>
              {n}
            </button>
          ))}
        </div>
        <div className='btn-subgroup-div'>
          {[4, 5, 6/*, '日'*/].map((n) => (
            <button key={ n } onClick={() => handleButtonClick(n)}>
              {n}
            </button>
          ))}
        </div>
        <div className='btn-subgroup-div'>
          <button onClick={ handleSetLabelIsChecked }>夜</button>
          <button onClick={ handleReset }>↺</button>
          <button key={ '日' } onClick={() => handleButtonClick('日')}>日</button>
        </div>
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
