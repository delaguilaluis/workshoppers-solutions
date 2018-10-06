var cripto = require('crypto')
var express = require('express')
var app = express()

app.put('/message/:id', function(req, res) {
  var val = cripto.createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex')

  res.send(val)
})

app.listen(process.argv[2])
