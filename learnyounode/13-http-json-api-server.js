'use strict'

var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') {
    res.writeHead(405)
    return res.end()
  }

  var parsedURL = url.parse(req.url, true)
  var date = new Date(parsedURL.query.iso)
  var body

  if (parsedURL.pathname === '/api/parsetime') {
    body = JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    })
  } else if (parsedURL.pathname === '/api/unixtime') {
    body = JSON.stringify({
      unixtime: date.getTime()
    })
  } else {
    res.writeHead(404)
    res.end()
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(body)

  // // Why does it fail in this order??
  // res.write(body)
  // res.writeHead(200, { 'Content-Type': 'application/json' })

  res.end()
})

server.listen(port)
