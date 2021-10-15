const {Plane} = require('./planeClass');

class Airport {
    constructor(name) {
        this.name = name;
        this.planes = [];

        if(!this.name) {
            throw new Error('Airport must have name');
        }
        if(typeof this.name !== 'string') {
            throw new Error('Airport name must be a string');
        }
    }
    addPlane(plane) {
        if (plane instanceof Plane) {
            this.planes.push(plane);
        }
        else {
            throw new Error('Only planes can be added to Airport');
        }
        

    }
}

module.exports = {Airport};