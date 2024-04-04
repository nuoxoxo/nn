import Link from "next/link"
import "../styles/globals.css"
import Head from "./head"
import fs from 'fs'

export const metadata = {
  title: "Geocities",
  // description: "✰✰✰✰✰✰✰✰✰✰✰✰",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const getRandomSVG = (): string => {
    const PATH = 'public/'
    const EXT = '.svg'
    const Files = fs.readdirSync(PATH).filter(
      (item) => item.endsWith(".svg")
    )
    const idx = Math.floor(Math.random() * Files.length)
    // console.log(Files)
    return `/${Files[idx]}`
  }

  const randomSVG = getRandomSVG()

  const head = Head()

  const header = (
    <header>
      <div className="text-center bg-[color:var(--preview-color)] p-4 mx-6 mt-6 rounded-lg
      ">

        <Link href='/'>
          <h1 className="text-3xl text-[color:var(--title-color)] font-bold">Geocities</h1>
        </Link>

        <p className="text-[color:var(--date-color)] font-mono mt-3">✰ Geocities ✰</p>

        {/* <Link href='/'>
          <img width="42px" className="mx-auto my-6" src={ randomSVG } />
        </Link> */}

      </div>
    </header>
  )
  const footer = (
    <>
      <footer className="mt-8">
        <div className="border-t border-slate-400 mx-6 pt-6
          flex justify-center items-center">
          <Link href='/'>
            {/* <img width="123px" src="/favicon.svg" /> */}
            <img width="123px" src={ randomSVG } />
          </Link>
        </div>
      </footer>
      <footer>
        <div className="pt-5 pb-9 text-center text-slate-400 text-xs sm:text-sm">
          <p>Developed by nuo.o</p>
        </div>
      </footer>

      {/*   ---   */}
      {/* everse-ordered footers */}
      {/*   ---   */}

      {/*
      <footer>
        <div className="border-t border-slate-400 mx-6 mt-16 mb-6 pt-6
          flex justify-center items-center
          text-center text-slate-300
        ">
          <h6>Developed by nuo.o</h6>
        </div>
      </footer>

      <footer>
        <div className="flex justify-center items-center m-6 pb-6
        ">
          <img width="100%" src="/favicon.svg" />
        </div>
      </footer> 
      */}

    </>
  )
  return (
    <html lang="en">
      {head}
      <body>
        <div className="mx-auto max-w-3xl">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
