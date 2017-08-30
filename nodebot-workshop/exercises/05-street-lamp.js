'use strict';

const five = require('johnny-five');

const board = new five.Board();
board.on('ready', () => {
  const photoresistor = new five.Sensor({
    pin: 'A0',
    freq: 250,
  });
  const led = new five.Led(9);

  photoresistor.on('data', (value) => {
    if (value > 600) {
      led.on();
    } else {
      led.off();
    }
  });
});
