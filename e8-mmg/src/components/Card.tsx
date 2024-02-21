import './Card.scss'

const Card = ({
  c,
  CardBackDefault,
  handleGuessing,
} : {
  
  c: { src: string; id: number; url: string }
  handleGuessing: (c: { src: string; id: number; url: string }) => void
  CardBackDefault: string

}) =>  {

  const handleClick = () => {
    handleGuessing( c )
  }

  return (
    <div>
      <div key={c.id} className='cards-card-div'>
        <img className='cards-card cards-card-back' src={CardBackDefault}
          onClick={ handleClick }
        />
        <img className='cards-card cards=card-front' src={ c.url } />
      </div>
    </div>
  )
}

export default Card