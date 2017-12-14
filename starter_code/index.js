const Elevator = require('./elevator.js');

let elevator = new Elevator();

console.log(elevator.requests);
elevator.call();
console.log(elevator.requests);
