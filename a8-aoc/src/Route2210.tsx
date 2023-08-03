import { useState, useEffect } from 'react'

const path = 
  'https://raw.githubusercontent.com/nuoxoxo/simple-tasks/main/_inputs_/2210.0'

var Route2210 = () => {
  const [lines, setLines] = useState<(string | number)[]>([])
  const [loading, setLoading] = useState(true)

  let res: number = 0

  const fetchLines = async () => {
    try {
      const resp = await fetch( path )
      const temp = await resp.text()
      const data: (string | number)[] = temp.trim().split('\n') // 'string | number' to avoid type error
      data[1] = parseInt(data[1] as string, 10) // 'as string' to avoid type error
      setLines(data)
      setLoading(false)
    } catch (error: any) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  }

  useEffect( () => {
    fetchLines()

    let x: number = 1
    // let res: number = 0 // moved up
    let i: number = 0
    let cc: number = 0
    while (true) {
      if (lines.length === i) {
        i %= lines.length
      }
      if (i + 1 === 20 || (i + 1) % 40 === 20) {
        res += (i + 1) * x
      }
      x += lines[i] as number
      i++
      cc++
      if (cc === 220) {
        break
      }
    }

  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <span>res: { res }</span>
          <pre>
            { lines ? lines.join('\n') : 'No data available.' }
          </pre>
        </>
      )}
    </div>
  )
}

export default Route2210
