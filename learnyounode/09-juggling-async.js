'use strict'

var http = require('http')

var urlA = process.argv[2]
var urlB = process.argv[3]
var urlC = process.argv[4]

function get (url, callback) {
  http.get(url, function (response) {
    let message = ''

    response.on('data', function (data) {
      message += data
    })
    .on('end', function () {
      return callback(undefined, message)
    })
    .on('error', callback)
  })
}

get(urlA, function (error, resultA) {
  if (error) throw error

  console.log(resultA)

  get(urlB, function (error, resultB) {
    if (error) throw error

    console.log(resultB)

    get(urlC, function (error, resultC) {
      if (error) throw error

      console.log(resultC)
    })
  })
})
