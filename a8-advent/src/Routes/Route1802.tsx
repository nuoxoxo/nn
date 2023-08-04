import { useState, useEffect } from 'react'
import { FetchData } from './FetchData'

const path = 
  'https://raw.githubusercontent.com/nuoxoxo/in/main/1802.in'

var Route1802 = () => {

  const [ loading, setLoading ] = useState<boolean>( true )
  const [ lines, setLines ] = useState<string[]>( [] )
  const [ lines23, setLines23 ] = useState<string[]>( [] )
  const [ p1, setP1 ] = useState<number>( 0 )

  const Solver_Part_One = () => {

    let c2: number = 0
    let c3: number = 0
    let tempLines23: string[] = []
    for (const line of lines) {
      // console.log(line)
      let D: number[] = new Array(26).fill(0)
      for (const c of line) {
        D[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
      }
      let ok2: boolean = false
      let ok3: boolean = false
      let char2: string = ''
      let char3: string = ''
      let strToPush: string = line
      let i: number = -1
      while (++i < D.length) {
        if (D[i] === 2) {
          ok2 = true
          char2 = String.fromCharCode(i)
        }
        if (D[i] === 3) {
          ok3 = true
          char3 = String.fromCharCode(i)
        }
      }
      if (ok2) {
        c2++
        // for (let c of line) {
        //   if (c === char2) {
        //     strToPush += c.toUpperCase()
        //   } else {
        //     strToPush += c
        //   }
        // }

        console.log(strToPush)
        strToPush = strToPush.replace(char2, char2.toUpperCase())
        console.log(strToPush)
      }
      if (ok3) {
        c3++
        // for (let c of line) {
        //   if (c === char3) {
        //     strToPush += c.toUpperCase()
        //   } else {
        //     strToPush += c
        //   }
        // }
        console.log(strToPush)
        strToPush = strToPush.replace(char3, char3.toUpperCase())
        console.log(strToPush)
      }
      if (strToPush.length !== 0) {
        tempLines23.push(strToPush)
      }
    }
    setLines23(tempLines23)
    setP1(c2 * c3)
  }

  const handleData = async () => {
    try {
      const raws = await FetchData( path )
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

  useEffect( () => {
    Solver_Part_One()
  }, [lines])

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
            { lines23 ? lines23.join('\n') : 'No data available.' }
          </pre>
          <div className='container-R'>
            <span>--- 2018 Day 2: Inventory Management System ---</span>
            <span>Part 1: { p1 }</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Route1802
