const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });
rl.on('SIGINT', (input) => {
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) {rl.pause();  console.log(`Received: ${input}`);
}
  });
});
