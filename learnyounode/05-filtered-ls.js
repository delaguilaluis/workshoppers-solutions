'use strict'

var fs = require('fs')

var directory = process.argv[2]
var extension = process.argv[3]

fs.readdir(directory, function (error, result) {
  if (error) throw error

  result.filter(function (fileName) {
    return fileName.endsWith('.' + extension)
  })
  .forEach(function (filename) {
    console.log(filename)
  })
})
