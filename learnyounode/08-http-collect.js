'use strict'

var http = require('http')

var url = process.argv[2]

http.get(url, function (response) {
  let message = ''

  response.on('data', function (data) {
    message += data.toString()
  })
  .on('end', function () {
    console.log(message.length)
    console.log(message)
  })
  .on('error', function (error) {
    console.log(error)
  })
})
