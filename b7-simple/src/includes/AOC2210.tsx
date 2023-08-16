import { useState, useEffect } from "react"
import { FetchData, LenNStrsFromLine } from "./Helpers"

const path = "https://raw.githubusercontent.com/nuoxoxo/in/main/2210.in"

var Aoc2210 = () => {
  const [lines, setLines] = useState<string[]>( [] )

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

  return (
    <>
    { lines ?
      <div className='playground'>
        <div className="field data-field">
          {lines
            ? lines.length === 1
              ? LenNStrsFromLine(lines[0], 16).join("\n")
              : lines.join("\n")
            : "No data available."}
        </div>
      </div>
      :
      <p>Loading data...</p>
}
    </>
  )
}

export default Aoc2210