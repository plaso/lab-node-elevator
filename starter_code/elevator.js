class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() {
    setInterval(update, 1000);
  }
  stop() {
    clearInterval(start());
  }
  update() {
    log();
  }
  _passengersEnter() {

  }
  _passengersLeave() {

  }
  floorUp() {
    if (this.floor < 4) {
      this.floor++;
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor--;
    }
  }
  call() {

  }
  log() {
    console.log(`Direction: up | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
