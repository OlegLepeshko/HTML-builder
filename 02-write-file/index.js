const fs = require('fs');
const readline = require('readline');
const path = require('path');

let data = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('input:');

rl.on('SIGINT', () => {
  console.log('finished input');
  fs.writeFile(path.resolve(__dirname, 'text.txt'), data, (err) => {
    if (err) {
      console.log(err);
    }
  });
  rl.close();
});

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('finished input');
    fs.writeFile(path.resolve(__dirname, 'text.txt'), data, (err) => {
      if (err) {
        console.log(err);
      }
    });
    rl.close();
  } else if (data === ''){
    data += input;
  } else {
    data += `\n${input}`;
  }
  fs.writeFile(path.resolve(__dirname, 'text.txt'), data, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
 