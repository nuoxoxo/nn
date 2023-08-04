import { useState, useEffect } from 'react'

const path = 
  'https://raw.githubusercontent.com/nuoxoxo/in/main/2210.0'

var Route2210 = () => {

  const [loading, setLoading] = useState<boolean>( true )
  const [lines, setLines] = useState<string[]>( [] )
  const [nums, setNums] = useState<number[]>( [] )
  const [p1, setP1] = useState<number>( 0 )
  // const [p2, setP2] = useState<string>( '' )
  const [p2, setP2] = useState<string[]>( [] )

  const Solver_Part_One = () => {

    let tt: number = 0
    let x: number = 1
    let i: number = 0
    let cycle: number = 0
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
      cycle++
      if (cycle === 220) {
        break
      }
    }
    setP1(tt)
  }

  const Solver_Part_Two = () => {

    let ss: string = ''
    let x: number = 1
    let i: number = 0
    let cycle: number = 0
    while (true) {
      if (i === nums.length) {
        i %= nums.length
      }
      let mod40: number = i % 40
      if (mod40 === x - 1 || mod40 === x || mod40 === x + 1) {
        ss += '@'
      } else {
        ss += ' '
      }
      if ((i + 1) % 40 === 0) {
        ss += '\n'
      }
      x += nums[i]
      cycle++
      if (cycle === 240) {
        break
      }
      // console.log(cycle)
      i++
      setP2([...p2, ss])
    }
    // setP2(ss)
    // setP2([...p2, ss])
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

  useEffect(() => {
    Solver_Part_Two()
  }, [p2])

  return (
    <>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <div className='container-L'>
            <pre>
              { lines ? lines.join('\n') : 'No data available.' }
            </pre>
            <pre>
              { nums ? nums.join('\n') : 'No data available.' }
            </pre>
            <div className='container-R'>
              <span>p1: { p1 }</span>
              <span>p2: </span>
              <pre>
                { p2 ? p2.join('\n') : 'No data available.' }
              </pre>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Route2210
