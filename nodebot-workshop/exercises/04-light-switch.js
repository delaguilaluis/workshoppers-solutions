'use strict';

const five = require('johnny-five');

const board = new five.Board();
board.on('ready', () => {
  const button = new five.Button(5);
  const led = new five.Led(9);

  let isLightOn = false;
  button.on('press', () => {
    if (isLightOn) {
      led.off();
    } else {
      led.on();
    }

    isLightOn = !isLightOn;
  });
});
