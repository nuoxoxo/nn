import './CardGuess.scss'

const CardGuess = ({
  c: {id, url },
  CardBackDefault,
} : {
  c: { src: string; id: number; url: string }
  CardBackDefault: string
}) =>  {
  return (
    <div>
      <div key={ id } className='cards-card-div'>
        <img className='cards-card cards-card-back' src={CardBackDefault}/>
        <img className='cards-card cards=card-front' src={ url } />
      </div>
    </div>
  )
}

export default CardGuess