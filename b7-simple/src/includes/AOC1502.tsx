import { useState, useEffect } from "react"
import { FetchData, LenNStrsFromLine } from "./Helpers"

const path = "https://raw.githubusercontent.com/nuoxoxo/in/main/1502.in"

var Aoc1501 = () => {
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
        <div className="field data-fetched">
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

export default Aoc1501
