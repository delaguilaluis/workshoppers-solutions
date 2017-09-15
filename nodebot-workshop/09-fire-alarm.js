'use strict';

const five = require('johnny-five');

const board = new five.Board();
board.on('ready', () => {
  const piezo = new five.Piezo(9);
  const led = new five.Led(13);
  const button = new five.Button(5);
  const alarmInterval = 1000;
  const thermometer = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0',
  });

  let isAlarmOn = false;
  let isBehaviorSwitched = false;

  function playAlarm() {
    isAlarmOn = true;

    // D5 tone and light twice a second
    piezo.frequency(587, alarmInterval / 2);
    led.blink(alarmInterval / 2);

    board.wait(alarmInterval, () => {
      if (isAlarmOn) {
        playAlarm();
      }
    });
  }

  function stopAlarm() {
    isAlarmOn = false;
    piezo.noTone();
  }

  thermometer.on('change', function onChange() {
    const temp = this.celsius;
    const condition = isBehaviorSwitched ? temp < 50 : temp > 50;

    if (condition) {
      playAlarm();
    } else {
      stopAlarm();
    }
  });

  button.on('press', () => {
    isBehaviorSwitched = true;
    stopAlarm();
  });
});
