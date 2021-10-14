const {Passenger} = require('./passengerClass');
const {CrewMem} = require('./crewmemClass');

class Plane {
    constructor(type) {
        this.type = type;
        this.passengers = [];
        this.crewmembers = [];

        if (!this.type) {
            throw new Error('Plane must have type');       
        }
        if (typeof this.type !== 'string') {
            throw new Error('Plane type must be a string');
        }
    }
    board(person) {
        if (person instanceof Passenger === true) {
            this.passengers.push(person);
        }
        else if (person instanceof CrewMem === true) {
            this.crewmembers.push(person);
        }


        
    }

    
}
    
const plane1 = new Plane('idk');
const pass1 = new Passenger('abc', 123, 123);
const pass2 = new Passenger('def', 456, 456);
const crewmem1 = new CrewMem('ghj', 'dfg');

plane1.board(crewmem1);
plane1.board(pass1);
plane1.board(pass2);
console.log(plane1);
module.exports = {Plane};