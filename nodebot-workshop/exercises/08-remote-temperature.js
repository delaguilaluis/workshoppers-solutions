'use strict';

const five = require('johnny-five');
const dnode = require('dnode');

const board = new five.Board();
board.on('ready', () => {
  const temperature = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0',
  });

  let currentTemp;
  temperature.on('change', function onChange() {
    currentTemp = this.celsius;
  });

  const dnodeOptions = {
    getTemperature(cb) {
      cb(currentTemp);
    },
  };

  dnode(dnodeOptions).listen(1337);
});
