var fs = require('fs')
var express = require('express')
var app = express()

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function (err, file) {
    if (err) {
      return res.send(500)
    }

    try {
      const books = JSON.parse(file)
      res.json(books)
    } catch (error) {
      console.log(error)
      return res.send(500)
    }
  })
})

app.listen(process.argv[2])
