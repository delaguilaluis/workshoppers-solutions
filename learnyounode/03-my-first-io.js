'use strict'

var fs = require('fs')

var content = fs.readFileSync(process.argv[2]).toString()
var newlines = content.split('\n').length - 1

console.log(newlines)
