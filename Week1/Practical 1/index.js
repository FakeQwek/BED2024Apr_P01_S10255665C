const path = require('node:path');
const notes = 'users/joe/notes.txt';
path.dirname(notes);
path.basename(notes);
path.extname(notes);

const fs = require('node:fs');
fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
})

const content = 'Some content!';

fs.writeFile('/Users/joe/text.txt', content, err => {
    if(err) {
        console.error(err);
    }
    else {
        console.log("file written successfully");
    }
})

const chalk = require('chalk');
console.log(chalk.green('I am green'));
