'use strict';

var config = require('config');

var bar = require('./bar');

var foo = function foo() {
  return Promise(function (resolve, reject) {
    resolve(bar);
  });
};

foo().then(function (bar) {
  console.log('bar = ' + bar);
})['catch'](function (err) {
  console.log('uhoh...');
});
