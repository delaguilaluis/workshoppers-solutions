'use strict'

var net = require('net')

var port = process.argv[2]

var server = net.createServer(function (socket) {
  var date = new Date()
  var formattedDate = date.getFullYear() +
    '-' + leftPad(2, '0', (date.getMonth() + 1).toString()) +
    '-' + leftPad(2, '0', date.getDate().toString()) +
    ' ' + leftPad(2, '0', date.getHours().toString()) +
    ':' + leftPad(2, '0', date.getMinutes().toString()) +
    '\n'

  socket.end(formattedDate)
})

server.listen(port)

function leftPad (minLen, padChar, string) {
  var result = string

  while (result.length < minLen) {
    result = padChar + result
  }

  return result
}
