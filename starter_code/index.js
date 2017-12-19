const Elevator = require('./elevator.js');

let elevator = new Elevator();

console.log(elevator.requests);
console.log(elevator.waitingList);
elevator.call();
console.log(elevator.requests);
console.log(elevator.waitingList);
