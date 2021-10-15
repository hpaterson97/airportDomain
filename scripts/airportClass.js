const {Plane} = require('./planeClass');

class Airport {
    static airports = [] //an array containing all of the instances that have been created
    //adding a static array or function is a way of extending the functionality of the class itself rather than the actual objects created from the class

    constructor(name) {
        this.name = name
        this.planes = []
        Airport.airports.push(this) // each time a new instance of this class is created, it is added to the airports array

        if(!this.name) {
            throw new Error('Airport must have name')
        }
        if(typeof this.name !== 'string') {
            throw new Error('Airport name must be a string')
        }
    }

    //combine land() and takeOff() functions to make a fly() function that removes plane from origin airport's plane array and adds it to destination airport's plane array
    land(plane) {
        if (plane instanceof Plane) {
            this.planes.push(plane) //adds the plane to the planes array (planes currently in this airport) if the plane is an instance of the Planes class
        }
        else {
            throw new Error('Only planes can land in Airport') //only instances of the Plane class can be added to the array of planes
        }
    }

    takeOff(plane) {
        if(plane instanceof Plane) {
            if(this.planes.includes(plane) === true) {
            const indx = this.planes.indexOf(plane) //plane will be removed or will 'take off' from airport specified
            this.planes.splice(indx, 1)

            }   
        else {
            throw new Error('Plane is not on ' + this.name + "'s runway") //if plane doesn't exist in airport then it will throw an error
            }
        }
        else{
            throw new Error('Only planes can take off from Airport') //only instances of the Plane class can be added to the array of planes
        }
        
    }
}

const plane1 = new Plane('abc');
const plane2 = new Plane('123');
const plane3 = new Plane('678');
const airp1 = new Airport('San Fran');
airp1.land(plane1);
airp1.land(plane2);
console.log(airp1);
airp1.takeOff(plane3);
console.log(airp1);

module.exports = {Airport};