'use strict'

const five = require('johnny-five')

const board = new five.Board()
board.on('ready', () => {
  const pot = new five.Sensor({
    pin: 'A2',
    freq: 250
  })
  const servo = new five.Servo(9)

  pot.on('data', (value) => {
    const mappedValue = five.Fn.map(value, 0, 1023, 0, 179)
    servo.to(mappedValue)
  })
})
