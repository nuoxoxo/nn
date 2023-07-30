const https = require("https")
const dotenv = require("dotenv")

dotenv.config()

const token = process.env.advent_of_code_session_token

function get_input(day) {

  const url = `https://adventofcode.com/2022/day/${day}/input`
  const headers = { Cookie: `session=${token}` }

  return new Promise((resolve, reject) => {

    const req = https.get(url, { headers }, (resp) => {
      let data = ""

      resp.on("data", (chunk) => {
        data += chunk
      })

      resp.on("end", () => {
        console.log(
          url,
          "\n",
          resp.statusCode,
          "\n",
          resp.statusMessage,
          "\n",
          data
        )

        if (resp.statusCode === 200) {
          resolve(data)
        } else {
          reject(
            new Error(
              `response: ${resp.statusCode}: ${resp.statusMessage} \n${data}`
            )
          )
        }
      })
    })

    req.on("error", (error) => {
      reject(new Error(`err request: ${error.message}`))
    })

    req.end()
  })
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
