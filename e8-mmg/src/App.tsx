// import { useState } from 'react'
import { useState } from 'react'
import './App.scss'

const makeImgurStr = (id: string): string => {
  return 'https://i.imgur.com/' + id + '.jpeg'
}

const CardsImg: { src: string }[] = [
  { 'src': 'Hz1X0JH' },
  { 'src': '9yv2mCJ' },
  { 'src': '6MG5HPe' },
  { 'src': 'zFmGDB4' },
  { 'src': 'fkCw83t' },
  { 'src': 'Aj8rD5P' },
  { 'src': 'QP32pW4' },
  { 'src': 'S6XtdpH' },
  // { 'src': 'N90grdZ' },
  // { 'src': 'bV9BjHm' },
  // { 'src': 'lsnQcbr' },
  // { 'src': 'OwDfLkA' },
  // { 'src': 'jWy7uCZ' },
  // { 'src': 'YjjHHWq' },
  // { 'src': 'BsP0ADp' },
  // { 'src': 'WYnL0R8' },
]

const App = () => {

  const [ Turns, setTurns ] = useState(0)
  const [ Cards, setCards ] = useState<{
    src: string;
    id: number;
    url: string
  }[]>([])

  const shuffleCards = () => {
    const res = [...CardsImg, ...CardsImg]
      .sort(() => Math.random() - .5)
      .map( (card) => ({
        ...card, 
        id: Math.random(),
        url: makeImgurStr(card.src)
      }))
    setCards( res )
    setTurns( 0 )
  }

  console.log('/test shuffle', Turns, Cards)

  return (
    <>
      <div className='App'>
        <h1> hello, world!</h1>
        <button
          onClick={ shuffleCards }
        >New Game</button>
      </div>
    </>
  )
}

export default App
