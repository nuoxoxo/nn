import React, { useState, useEffect } from 'react'

const path = 'https://raw.githubusercontent.com/nuoxoxo/simple-tasks/main/_inputs_/2210.0'

function App() {
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

  console.log(lines)

  useEffect( () => {
    fetchLines()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <pre>{lines ? JSON.stringify(lines, null, 2) : 'No data available.'}</pre>
      )}
    </div>
  )
}

export default App
