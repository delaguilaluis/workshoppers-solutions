'use strict'

var filteredLS = require('./filtered-ls')

var directory = process.argv[2]
var extension = process.argv[3]

filteredLS(directory, extension, function (error, files) {
  if (error) throw error

  files.forEach(function (fileName) {
    console.log(fileName)
  })
})
