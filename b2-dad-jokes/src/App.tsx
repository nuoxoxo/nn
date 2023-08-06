import { useState, useEffect } from 'react'
import { FetchData } from './FetchData'

function App() {

  const path = 
  'https://raw.githubusercontent.com/nuoxoxo/in/main/jokes.in'

  const [loading, setLoading] = useState<boolean>( true )
  const [lines, setLines] = useState<string[]>( [] )

  const handleData = async () => {
    try {
      let raws: string[] = await FetchData( path )
      raws = raws.map(item => item.replace(/<br\s*[\/]?>/gi, '\n'))
      setLines(raws)
      setLoading(false)
    } catch (error: any) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  }

  useEffect( () => {
    handleData()
  }, [])


  return (
    <>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className='container'>
          <pre>
            { lines ? lines[Math.floor(Math.random() * lines.length)] : 'No data available.' }
          </pre>
        </div>
      )}
    </>
  )
}

export default App
