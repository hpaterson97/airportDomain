const {Bag} = require('./bagClass');
class Person {
    constructor(name) {
        this.name = name;
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
}

module.exports = {Person};