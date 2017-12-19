const Person = require('./person.js');

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
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
    if (this.waitingList.length > 0) {
      this.passengers.push(this.waitingList[0]);
      this.waitingList.splice(0, 1);
      this.requests.push(this.passengers.destinationFloor);
    }
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
    let person = new Person("Pepe", 0, 3);
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
  log() {
    console.log(`Direction: up | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
