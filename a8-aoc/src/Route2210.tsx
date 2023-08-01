import { useState, useEffect } from 'react'

const path = 
  'https://raw.githubusercontent.com/nuoxoxo/simple-tasks/main/_inputs_/2210.0'

var Route2210 = () => {
  const [lines, setLines] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const fetchLines = async () => {
    try {
      const resp = await fetch( path )
      const temp = await resp.text()
      const data: string[] = temp.trim().split('\n')
      setLines(data)
      setLoading(false)
    } catch (error: any) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  }

  useEffect( () => {
    fetchLines()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <pre>{lines ? lines.join('\n') : 'No data available.'}</pre>
      )}
    </div>
  )
}

export default Route2210
