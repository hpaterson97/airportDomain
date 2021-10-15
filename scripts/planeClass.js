const {Passenger} = require('./passengerClass');
const {CrewMem} = require('./crewmemClass');


class Plane {
    constructor(type, id) {
        this.type = type;
        this.id = id;
        this.passengers = [];
        this.crewmembers = [];
        this.origin;

        if (!this.type) {
            throw new Error('Plane must have type');       
        }
        if (typeof this.type !== 'string') {
            throw new Error('Plane type must be a string');
        }
        if (!this.id) {
            throw new Error('Plane must have ID');       
        }
        if (typeof this.id !== 'number') {
            throw new Error('Plane id must be a number');
        }
    }
    board(person) {
        if (person instanceof Passenger === true) {
            this.passengers.push(person.name);
        }
        else if (person instanceof CrewMem === true) {
            this.crewmembers.push(person.name);
        }


        
    }
    
    

    
}
    

module.exports = {Plane};