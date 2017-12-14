class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() { setInterval(update, 1000); }
  stop() { clearInterval(start());}
  update() { log(); }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() { console.log(`Direction: ${floorUp()} | Floor: ${floor}`); }
}

module.exports = Elevator;
