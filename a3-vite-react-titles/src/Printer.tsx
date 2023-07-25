import { useState, useEffect } from "react"

interface Idiom {
  word: string
}

var Printer: React.FC = () => {
  /*
  const names: string[] = [
      'Wahou !',
      'L\’ultima notte di Amore',
      'The Pope\'s Exorcist',
      'Le principal',
      'About My Father',
      'Sick of Myself',
      'The Boogeyman',
      'L\'amour et les forêts',
      'Umami',
      'Jeanne du Barry',
      'No Hard Feelings',
      'Asteroid City'
  ]
  */

  // Define state variables to keep track of the current name and style

  const [names, setNames] = useState<string[]>([])

  const fetchData = async () => {
    try {
      const resp = await fetch("../_chengyu_database_/data/idiom.json")
      const data: Idiom[] = await resp.json()

      const extractedNames = data
        .map((line: Idiom) => line.word)
        .filter((name: string) => name.length === 4)

      setNames(extractedNames)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  // console.log(names.length, names[1]) // testing

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(names.length, names[1])

  // const [name, setSingleName] = useState(

  //   names[Math.floor(Math.random() * names.length)]
  // )
  // console.log(name) // testing

  const [tubeColor, setTubeColor] = useState(getRandomTubeColor())
  const [name, setSingleName] = useState<string>(() => {
    if (names.length === 0) return ""
    return names[Math.floor(Math.random() * names.length)]
  })

  useEffect(() => {
    if (names.length > 0) {
      const res = names[Math.floor(Math.random() * names.length)]
      setSingleName(res)
    }
  }, [names])

  // console.log(name) // testing

  // Function to generate a random tube color
  function getRandomTubeColor() {
    const offset = 42
    const offsetInverted = 255 - offset
    return {
      color:
        "rgb(" +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        "1)",
      fontWeight: "bold",
      // userSelect: 'none',
      cursor: "pointer",
    }
  }

  // Function to handle the click event
  var handleOnClick = () => {
    setTubeColor(getRandomTubeColor())
    if (names.length === 0) return
    setSingleName(names[Math.floor(Math.random() * names.length)])
  }

  // console.log(tubeColor["color"]) // test

  return (
    <span
      onClick={handleOnClick}
      className="tube"
      title="click me !!!"
      style={tubeColor}
    >
      { name }<br/>{ names.indexOf(name) }
    </span>
  )
}

export default Printer
