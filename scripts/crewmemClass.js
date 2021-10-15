// CREW MEMBER CLASS //
const {Bag} = require('./bagClass');
const {Person} = require('./personSupClass');

class CrewMem extends Person{
    constructor(name, position){
        super(name)
        this.position = position;
        this.bags = [];

        if(!this.name) {
            throw new Error('Crew Member must have name')
        }
        if(!this.position) {
            throw new Error('Crew Member must have position')
        }
        if(typeof this.name !== 'string') {
            throw new Error('Crew Member name must be a string')
        }
        if(typeof this.position !== 'string') {
            throw new Error('Crew Member position must be a string')
        }
    }
    
};
/*
const captain = new CrewMem('John', 'Captain');
console.log(captain)
captain.addBag(2)
console.log(captain);*/

module.exports = {CrewMem}

