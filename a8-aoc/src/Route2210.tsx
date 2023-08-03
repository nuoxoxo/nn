import { useState, useEffect } from 'react'

const path = 
  'https://raw.githubusercontent.com/nuoxoxo/simple-tasks/main/_inputs_/2210.0'

var Route2210 = () => {
  const [lines, setLines] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [res, setRes] = useState<number>(0)

  const Solver = () => {
    let x: number = 1
    let tt: number = 0
    let i: number = 0
    let cc: number = 0
    while (true) {
      if (lines.length === i) {
        i %= lines.length
      }
      if (i + 1 === 20 || (i + 1) % 40 === 20) {
        tt += (i + 1) * x
        // console.log(tt)
      }
      x += lines[i]
      i++
      cc++
      if (cc === 220) {
        break
      }
    }
    setRes(tt)
  }

  const fetchLines = async () => {
    try {
      const resp = await fetch( path )
      const temp = await resp.text()
      const arr: number[] = []
      const raw: string[] = temp.trim().split('\n')
      for (let line of raw) {
        arr.push(0)
        let temp: string[] = line.split(' ')
        if (temp.length === 2) {
          arr.push(parseInt(temp[1], 10))
        }
      }
      setLines(arr)
      setLoading(false)
    } catch (error: any) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  }

  useEffect( () => {
    fetchLines()
  }, [])

  useEffect(() => {
    Solver()
  }, [lines])

  return (
    <>
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
    </>
  )
}

export default Route2210
