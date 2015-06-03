let config = require('config');

let bar = require('./bar');

let foo = () => {
  return Promise((resolve, reject) => {
    resolve(bar)
  })
}

foo()
  .then((bar) => {
    console.log(`bar = ${bar}`);
  })
  .catch((err) => {
    console.log('uhoh...')
  })
