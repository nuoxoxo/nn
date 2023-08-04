import { useState, useEffect } from 'react'

const path = 
  'https://raw.githubusercontent.com/nuoxoxo/in/main/2210.0'

var Route2210 = () => {

  const [loading, setLoading] = useState<boolean>( true )
  const [lines, setLines] = useState<string[]>( [] )
  const [nums, setNums] = useState<number[]>( [] )
  const [p1, setP1] = useState<number>( 0 )

  const Solver_Part_One = () => {

    let x: number = 1
    let tt: number = 0
    let i: number = 0
    let cc: number = 0
    while (true) {
      if (nums.length === i) {
        i %= nums.length
      }
      if (i + 1 === 20 || (i + 1) % 40 === 20) {
        tt += (i + 1) * x
        // console.log(tt)
      }
      x += nums[i]
      i++
      cc++
      if (cc === 220) {
        break
      }
    }
    setP1(tt)
  }

  const fetchLines = async () => {
    try {

      const resp = await fetch( path )
      const text = await resp.text()
      const raws: string[] = text.trim().split('\n')
      const arr: number[] = []
      for (let raw of raws) {
        arr.push(0)
        let temp: string[] = raw.split(' ')
        if (temp.length === 2) {
          arr.push(parseInt(temp[1], 10))
        }
      }
      setNums(arr)
      setLines(raws)
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
    Solver_Part_One()
  }, [nums])

  return (
    <>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className='container-L'>
          <pre>
            { lines ? lines.join('\n') : 'No data available.' }
          </pre>
          <pre>
            { nums ? nums.join('\n') : 'No data available.' }
          </pre>
          <span>p1: { p1 }</span>
        </div>
      )}
    </>
  )
}

export default Route2210
