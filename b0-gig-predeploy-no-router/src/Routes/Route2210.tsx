import { useState, useEffect } from 'react'
import { FetchData } from './FetchData'

const path = 
  'https://raw.githubusercontent.com/nuoxoxo/in/main/2210.in'

var Route2210 = () => {

  const [loading, setLoading] = useState<boolean>( true )
  const [lines, setLines] = useState<string[]>( [] )
  const [nums, setNums] = useState<number[]>( [] )
  const [p1, setP1] = useState<number>( 0 )
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
    let temp: string[] = []
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
      i++
      temp.push(ss + '\n')
    }
    setP2(temp)
  }

  const handleData = async () => {
    try {
      const raws = await FetchData( path )
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
    handleData()
  }, [])

  useEffect(() => {
    Solver_Part_One()
  }, [nums])

  useEffect(() => {
    Solver_Part_Two()
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
          <div className='container-R'>
            <span>--- 2022 Day 10: Cathode-Ray Tube ---</span>
            <span>Part 1: { p1 }</span>
            <span>Part 2: </span>
            <pre>
              { p2 ? [...p2].reverse().join('\n') : 'No data available.' }
            </pre>
          </div>
        </div>
      )}
    </>
  )
}

export default Route2210
