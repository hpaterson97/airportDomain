const {Passenger} = require('./passengerClass');
const {CrewMem} = require('./crewmemClass');

class Plane {
    constructor(type) {
        this.type = type;
        this.passengers = [];
        this.crewmembers = [];
        this.origin = origin;

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
    setOrigin(name) {
        this.origin = name;
    }

    
}
    

module.exports = {Plane};