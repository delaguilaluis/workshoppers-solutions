var express = require('express')
var bodyparser = require('body-parser')

var app = express()
app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  var str = req.body.str
  var inverse = str.split('').reverse().join('')

  res.send(inverse)  
})

app.listen(process.argv[2])