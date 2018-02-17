'use strict'

var fs = require('fs')
var path = require('path')

var directory = process.argv[2]
var extension = process.argv[3]

fs.readdir(directory, function (error, result) {
  if (error) throw error

  result.filter(function (fileName) {
    return path.extname(fileName) === '.' + extension
  })
  .forEach(function (filename) {
    console.log(filename)
  })
})
