// import { useState } from 'react'
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "./App.scss"

interface Country {
  alpha3Code: string
  callingCodes: string[] | null
  name: {
    common: string
  }
  flags: {
    png: string
  }
  population: number
  region: string
  capital: string
}

function App() {
  const [Err, setErr] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [A, setA] = useState<Country[]>([])

  // for Input
  const [Query, setQuery] = useState("")
  const [QueryParam] = useState(["name"])
  const [FilterRegion, setFilterRegion] = useState("All")

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (res) => {
          setA(res)
          setIsLoading(false)
        },
        (Err) => {
          setErr(Err)
          setIsLoading(false)
        }
      )
  }, [])

  function Lookup(arr:Country[]) {
    if (!Query) {
      console.log('/empty')
      return arr
    }
    return arr.filter((item) => {
      console.log('/query', Query, item)
      if (item.region == FilterRegion) {
        return QueryParam.some((newItem) => {
          const res = item[newItem as keyof Country]
          if (typeof res === 'object' && res !== null && 'common' in res)
            return (
              res.common.toString().toLowerCase().indexOf(Query.toLowerCase()) > -1
            )
          return false
        })
      } else if (FilterRegion == "All") {
        return QueryParam.some((newItem) => {
          const res = item[newItem as keyof Country]
          if (typeof res === 'object' && res !== null && 'common' in res)
            return (
              res.common.toString().toLowerCase().indexOf(Query.toLowerCase()) > -1
            )
          return false
        })
      }
    })
  }

  //  1st attempt

  /*
  const Lookup = (arr: Country[]): Country[] => {
    if (!Query) {
      return arr
    }
    return arr.filter((item) => {
      if ((item.region as string) == FilterRegion) {
        return QueryParam.some((new_item: string) => {
          const res = item[new_item as keyof Country]
          if (typeof res !== "string") return res
          return res.toString().toLowerCase().indexOf(Query.toLowerCase()) > -1
        })
      } else if (FilterRegion == "All") {
        return QueryParam.some((new_item: string) => {
          const res = item[new_item as keyof Country]
          if (typeof res !== "string") return res
          return res.toString().toLowerCase().indexOf(Query.toLowerCase()) > -1
        })
      }
    })
  }
  */

  //  2nd attempt

  /*
  const Lookup = (arr: Country[]): Country[] => {
    if (!Query) {
      return arr
    }
    return arr.filter((item) => {
      if (item.region === FilterRegion || FilterRegion === "All") {
        return QueryParam.some((newItem: string) => {
          const propertyValue = item[newItem as keyof Country]
          if (typeof propertyValue === 'string') {
            return propertyValue
              .toLowerCase()
              .includes(Query.toLowerCase())
          }
          return false
        })
      } else if (FilterRegion === "All") {
        return QueryParam.some((newItem: string) => {
          const propertyValue = item[newItem as keyof Country]
          if (typeof propertyValue === 'string') {
            return propertyValue
              .toLowerCase()
              .includes(Query.toLowerCase())
          }
          return false
        })
      }
      return false
    })
  }*/

  if (Err) {
    return <>{Err.message}</>
  } else if (isLoading) {
    return <>loading...</>
  }
  return (
    <>
      <h1>hello, world!</h1>
      <div className="section-wrapper">

        {/* part 1 of section-wrapper */}

        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="⭐ User input ⭐"
              value={Query}
              // realtime input/lookup is here
              onChange={(e) => {
                setQuery(e.target.value)
                console.log("Query:", e.target.value)
              }}
            />
          </label>
          <div className="select">
            {/* realtime input/lookup is here */}
            <select
              onChange={(e) => {
                setFilterRegion(e.target.value)
                console.log("FilterRegion:", e.target.value)
              }}
              className="custom-select"
              aria-label="Filter By Region"
            >
              <option value="All">⭐ Filter By Region ⭐</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>

        {/* part 2 of section-wrapper */}

        <ul className="card-grid">
          {Lookup(A).map((a: Country) => (
            // <li key={a.alpha3Code}>
            <li key={uuidv4()}>
              <article className="card-article">
                <div className="card-img">
                  <img src={a.flags.png} alt={`${a.name.common} Flag`} />
                </div>
                <div className="card-content">
                  <h3 className="card-name">{a.name.common}</h3>
                  <ul>
                    <li key={a.population}>
                      pop: <span>{a.population}</span>
                    </li>
                    <li key={a.region}>
                      region: <span>{a.region}</span>
                    </li>
                    <li key={a.capital}>
                      capital: <span>{a.capital}</span>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
