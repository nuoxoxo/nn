// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.scss'

interface Country {
  callingCodes: string[] | null;
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string;
}

function App() {
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState( true )
  const [A, setA] = useState<Country[]>( [] )
  // const [A, setA] = useState( [] )

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
      .then( (res) => res.json() )
      .then( (res) => {
        setA( res )
        setIsLoading( false )
      }, (error) => {
        setError( error )
        setIsLoading( false )
      })
  }, [])

  if (error) {
    return <>{error.message }</>
  } else if ( isLoading ) {
    return <>loading...</>
  }
  return (
    <>
      <h1>hello, world!</h1>
      <div className='section-wrapper'>
        <ul className='card-grid'>
          {
            A.map( (a : Country ) => (
              // <li key={ a.callingCodes![0] }>
              <li key={uuidv4()}>
                <article
                  className='card-article'
                >
                  <div className='card-img'>
                    <img src={ a.flags.png } />
                  </div>
                  <div className='card-content'>
                    <h3 className='card-name'>
                      { a.name.common }
                    </h3>
                    <ul>
                      <li key={a.population}>
                        pop:{' '}
                        <span>{ a.population }</span>
                      </li>
                      <li key={a.region}>
                        region:{' '}<span>{ a.region }</span>
                      </li>
                      <li key={a.capital}>
                        capital:{' '}<span>{ a.capital }</span>
                      </li>
                    </ul>
                  </div>
                </article>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
