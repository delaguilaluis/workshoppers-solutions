var http = require('http')

var port = process.argv[2]

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405)
    return res.end()
  }

  req.on('data', function (data) {
    res.write(data.toString().toUpperCase())
  })
  .on('end', function () {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end()
  })
  .on('error', function (error) {
    if (error) {
      console.error(error)

      res.writeHead(500)
      res.end()
    }
  })
})

server.listen(port, function () {
  console.log('Listening on port ' + port)
})
