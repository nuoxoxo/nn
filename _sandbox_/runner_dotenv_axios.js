const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config()

const token = process.env.advent_of_code_session_token

async function get_input(day) {

  const url = `https://adventofcode.com/2022/day/${day}/input`
  const headers = { Cookie: `session=${token}` }
  

  try {

    const resp = await axios.get(url, { headers })
    console.log(url, "\n", resp.status, "\n", resp.statusText, "\n", resp.data)

    if (resp.status === 200) {
      return resp.data
    } else {
      throw new Error(
        `response: ${resp.status}: ${resp.statusText} \n${resp.data}`
      )
    }
  } catch (error) {
    throw new Error(`err request: ${error.message}`)
  }
}

async function main() {

  try {
    const res = await get_input(10)
    console.log(res[0], res.length)
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

main()
