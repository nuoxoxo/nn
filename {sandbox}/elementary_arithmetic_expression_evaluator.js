var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
while (true) {
    rl.question('input: ', function (input) {
        if (input.toLowerCase() === 'exit') {
            rl.close();
        }
        else {
            console.log("got this msg: ".concat(input));
        }
    });
}
