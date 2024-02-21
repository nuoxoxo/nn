// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.scss'
import Card from './components/Card'

//  this the default image of the card
const CardBackDefault: string = 'https://i.imgur.com/OeqF6i7.png'

//  URL-string maker for a stripped github/in-styles ID tring
const makeImgurStr = (id: string): string => {

  return 'https://i.imgur.com/' + id + '.jpeg'
}

//  shuffle default card collection
const shuffle_fisher_yates = (arr: { src: string }[]): { src: string }[] => {

  let currIdx = arr.length
  while (currIdx > 0) {
    let randIdx = Math.floor(Math.random() * currIdx)
    currIdx--
    [arr[currIdx], arr[randIdx]] = [arr[randIdx], arr[currIdx]]
  }
  return arr
}

//  default card collection
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

  const [ g1, setg1 ] = useState<{id: number; url: string } | null>( null )
  const [ g2, setg2 ] = useState<{id: number; url: string } | null>( null )
  const [ hasClickedHandleGuessing, setHasClickedHandleGuessing ] = useState<Boolean>(false)
  const [ Turns, setTurns ] = useState(0)
  const [ Cards, setCards ] = useState<{
    src: string;
    id: number;
    url: string
  }[]>([])

  // shuffle using F.Y.N. and select 8 items
  const CardsImg8 = shuffle_fisher_yates([ ... CardsImgSrc]).slice(0, 8)

  // double each item and shuffle w/ a condensed F.Y.N.
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

  // console.log('/dbg shuffle', Turns, Cards)

  // handle guessing
  const handleGuessing = (c: {id: number; url: string}): void => {

    setHasClickedHandleGuessing(true)
    g1 == null ? setg1( c ) : setg2( c )
    console.log('/guessed', c )

    // 👇 won't log bc. not finished updating the state ---> should use useEffect
    console.log('/state/in handler', g1, g2 )
  }

  useEffect(() => {
    if (hasClickedHandleGuessing) console.log('/state/useEffect', g1, g2)
  }, [g1, g2])

  return (
    <>
      <div className='App'>
        <h1> hello, world!</h1>
        <div className='btn'>
          <button onClick={ shuffle_matching_pairs }>New Game</button>
        </div>
        <div className='cards-grid'>

          {/* NEW way : functional component*/}
          {Cards.map(c => (
            <Card
              c={c}
              key={c.id}
              handleGuessing={handleGuessing}
              CardBackDefault={CardBackDefault}
            />
          ))}

          {/* old way */}
          {/*
          {Cards.map(c => (
            <div key={c.id} className='cards-card-div'>
              <img className='cards-card cards-card-back' src={CardBackDefault}/>
              <img className='cards-card cards=card-front' src={c.url} />
            </div>
          ))}
          */}

        </div>
      </div>
    </>
  )
}

export default App
