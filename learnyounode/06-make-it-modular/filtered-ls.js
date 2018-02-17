'use strict'

var fs = require('fs')
var path = require('path')

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (error, files) {
    if (error) return callback(error)

    var filteredFiles = files.filter(function (fileName) {
      return path.extname(fileName) === '.' + extension
    })

    callback(undefined, filteredFiles)
  })
}
