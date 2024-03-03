import { useLoaderData } from "react-router-dom"
import { fetchDateFromLocalStorage } from "../helpers"
import { ReactNode } from "react"

// export const dashboardLoader = () => {
export function dashboardLoader () {
  const anon: { [key:string|number]: any } = fetchDateFromLocalStorage( 'anon' )
  
  return anon ? { anon } : null
}

const Dashboard = (): ReactNode => {
  const { anon } = useLoaderData ()
  return <>
      <h1>
        Dashboard
      </h1>
      <h1>
        {anon}
      </h1>
    </>
}

export default Dashboard