import { useState, useEffect } from "react"
import { FetchData } from "./Helpers"

const path = "https://raw.githubusercontent.com/nuoxoxo/in/main/jokes.in"

var DadJokes = () => {
  const [lines, setLines] = useState<string[]>([])
  const [index, setIndex] = useState<number>(0)

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

  const handleOnClick = () => {
    if (lines.length < 2) {
      setIndex(0)
      return
    }
    let randIdx = Math.floor(Math.random() * lines.length)
    while (randIdx === index) {
      randIdx = Math.floor(Math.random() * lines.length)
    }
    setIndex(randIdx)
  }


  return (
    <>
      <div className="playground" onClick={handleOnClick} >
        <div className="field dad-jokes-field" >
          <span>
            { lines ?
              lines[Math.floor(Math.random() * lines.length)]
              : "Loading..."
            }
          </span>
        </div>
      </div>
    </>
  )
}

export default DadJokes
