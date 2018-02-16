'use strict'

var fs = require('fs')

fs.readFile(process.argv[2], function (error, result) {
  if (error) throw error

  var newlines = result.toString().split('\n').length - 1
  console.log(newlines)
})
