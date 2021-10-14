// CREW MEMBER CLASS //
const {Bag} = require('./bagClass');

class CrewMem {
    constructor(name, position){
        this.name = name;
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
    addBag(weight) {
        const bag = new Bag(weight);
        if (bag.isOverLimit() === true) {
            throw new Error('Bag over weight limit'); 
        }
        else {
            this.bags.push(bag);
        }

    }
};

module.exports = {CrewMem}

