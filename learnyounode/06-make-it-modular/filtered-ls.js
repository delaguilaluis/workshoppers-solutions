'use strict'

var fs = require('fs')

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, function (error, files) {
    if (error) return callback(error)

    var filteredFiles = files.filter(function (fileName) {
      return fileName.endsWith('.' + extension)
    })

    callback(undefined, filteredFiles)
  })
}
