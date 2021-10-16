const {Passenger} = require('./passengerClass');
const {CrewMem} = require('./crewmemClass');


class Plane {
    constructor(name, flightNo) {
        this.name = name;
        this.flightNo = flightNo;
        this.passengers = [];
        this.crewmembers = [];
        this.origin;

        if (!this.name) {
            throw new Error('Plane must have name');       
        }
        if (typeof this.name !== 'string') {
            throw new Error('Plane name must be a string');
        }
        if (!this.flightNo) {
            throw new Error('Plane must have flight number');       
        }
        if (typeof this.flightNo !== 'number') {
            throw new Error('flightNo must be a number');
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