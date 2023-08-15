import { useState, useEffect } from "react"
import { FetchData, LenNStrsFromLine } from "./Helpers"

const path = "https://raw.githubusercontent.com/nuoxoxo/in/main/1501.in"

var AOC1501 = () => {
  const [lines, setLines] = useState<string[]>( [] )
  const [processBothParts, setProcessBothParts] = useState<string[]>( [] )
  const [p1, setP1] = useState<number>(0)
  const [p2, setP2] = useState<number>(0)

  const Solver = () => {
    if (lines === undefined || lines[0] === undefined)
      return
    let s: string = lines[0]
    let res1: number = 0
    let res2: number = 0

    let process: string[] = []
    let prev: string = s[0]
    let basement: boolean = false
    let basementChecked: boolean = false
    let i: number = -1

    while (++i < s.length) {
      let c: string = s[i]
      let temp: string = ''
      if (c == "(") {
        ++res1
      } else {
        --res1
      }
      let symbol = ' '
      if (prev !== c) {
        if (prev === '(') {
          symbol = '↗'
        } else if (prev === ')') {
          symbol = '↘'
        } else {
          symbol = '-'
        }
      }
      if ( !basement && res1 < 0) {
        res2 = i + 1
        basement = true
      }
      temp = symbol + ' ' + (res1 < 0 ? '' : ' ') + res1.toString()
      if ( !basementChecked && basement) {
        
        temp += ' ☆'
        basementChecked = true
        
      }
      process.push(temp)
      console.log(temp)
      prev = c
    }
    setProcessBothParts(process)
    setP1(res1)
    setP2(res2)
  }

  const handleData = async () => {
    try {
      const raws = await FetchData(path)
      setLines(raws)
    } catch (error: any) {
      console.error("Error fetching data: ", error)
    }
  }

  useEffect(() => {
    handleData()
  }, [])

  useEffect(() => {
    Solver()
  }, [lines])

  return (
    <>
    {lines?
      <div className='playground'>
        <div className="field data-fetched">
          {lines
            ? lines.length === 1
              ? LenNStrsFromLine(lines[0], 16).join("\n")
              : lines.join("\n")
            : "No data available."}
        </div>
        <div className="field data-fetched">
          {processBothParts
            ? [...processBothParts].reverse().join("\n")
            : "No data available."}
        </div>
        <div className="field res">
          <>
            <span>--- 2015 Day 1: Not Quite Lisp ---</span>
            <span>Part 1: {p1}</span>
            <span>Part 2: {p2}</span>
          </>
        </div>
      </div> : <p>Loading data...</p>
}
    </>
  )
}

export default AOC1501
