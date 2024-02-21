import './Card.scss'

const Card = ({
  c,
  flipped,
  handleGuessing,
  CardBackDefault,
} : {

  c: {
    src: string;
    id: number;
    url: string;
    matched: boolean
  }

  flipped: boolean
  CardBackDefault: string

  handleGuessing: (c: {
    src: string;
    id: number;
    url: string;
    matched: boolean
  }) => void
  
}) =>  {

  const handleClick = () => {
    handleGuessing( c )
  }

  return (
    <div key={c.id} className='cards-card-div'>
      <div className={flipped ? 'flipped' : ''}>
        {/* <img className='cards-card cards=card-front' src={ c.url } /> */}
        <img className='cards-card cards-card-back' src={ c.url }
          // onClick={ handleClick }
        />
        <img className='cards-card cards-card-front' src={CardBackDefault}
          onClick={ handleClick }
        />
      </div>
    </div>
  )
}

export default Card