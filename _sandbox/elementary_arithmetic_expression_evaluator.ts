const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

while (true) {
    rl.question('input: ', (input: string) => {
        if (input.toLowerCase() === 'exit') {
            rl.close()
        } else {
            console.log(`got this msg: ${input}`)
        }
    })
}

