'use strict';

const five = require('johnny-five');

function spin(b, m) {
  m.start(200);
  b.wait(2000, () => {
    m.stop();
    b.wait(1000, () => {
      spin(b, m);
    });
  });
}

const board = new five.Board();
board.on('ready', () => {
  const motor = new five.Motor(9);
  spin(board, motor);
});
