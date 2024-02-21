// import { useState } from 'react'
import { useState } from 'react'
import './App.scss'

const CardBackDefault: string = 'https://i.imgur.com/OeqF6i7.png'

const makeImgurStr = (id: string): string => {

  return 'https://i.imgur.com/' + id + '.jpeg'
}

const shuffle_fisher_yates = (arr: { src: string }[]): { src: string }[] => {

  let currIdx = arr.length
  while (currIdx > 0) {
    let randIdx = Math.floor(Math.random() * currIdx)
    currIdx--
    [arr[currIdx], arr[randIdx]] = [arr[randIdx], arr[currIdx]]
  }
  return arr
}

const CardsImgSrc: { src: string }[] = [
  { 'src': 'Hz1X0JH' },
  { 'src': '9yv2mCJ' },
  { 'src': '6MG5HPe' },
  { 'src': 'zFmGDB4' },
  { 'src': 'fkCw83t' },
  { 'src': 'Aj8rD5P' },
  { 'src': 'QP32pW4' },
  { 'src': 'S6XtdpH' },
  { 'src': 'N90grdZ' },
  { 'src': 'bV9BjHm' },
  { 'src': 'lsnQcbr' },
  { 'src': 'OwDfLkA' },
  { 'src': 'jWy7uCZ' },
  { 'src': 'YjjHHWq' },
  { 'src': 'BsP0ADp' },
  { 'src': 'WYnL0R8' },
]

const App = () => {

  const [ Turns, setTurns ] = useState(0)
  const [ Cards, setCards ] = useState<{
    src: string;
    id: number;
    url: string;
  }[]>([])

  const CardsImg8 = shuffle_fisher_yates([ ... CardsImgSrc]).slice(0, 8)

  const shuffle_matching_pairs = () => {
    const res = [...CardsImg8, ...CardsImg8]
      .sort(() => Math.random() - .5)
      .map( (card) => ({
        ...card, 
        id: Math.random(),
        url: makeImgurStr(card.src)
      }))
    setCards( res )
    setTurns( 0 )
  }

  console.log('/dbg shuffle', Turns, Cards)

  return (
    <>
      <div className='App'>
        <h1> hello, world!</h1>
        <button onClick={ shuffle_matching_pairs }>New Game</button>
        <div className='cards-grid'>
          {Cards.map(c => (
            <div key={c.id} className='cards-card-div'>
              <img className='cards-card cards-card-back' src={CardBackDefault}/>
              <img className='cards-card cards=card-front' src={c.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
