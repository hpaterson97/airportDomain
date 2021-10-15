const { CrewMem } = require('./crewmemClass');
const { Passenger } = require('./passengerClass');
const {Plane} = require('./planeClass');
const {Person} = require('./personSupClass');

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
    setOrigin(plane) {
        plane.origin = this.name;
        this.planes.push(plane);
    }

    fly(plane, destination) {
        
        
        if(this.name == plane.origin){
            this.planes.push(plane);
        }
        else {
            throw new Error('Plane is not on ' + this.name + "'s runway");
        }
        const dest = destination;
        const apdestindex = Airport.airports.indexOf(destination);

        if (plane instanceof Plane) {
            if (this.planes.includes(plane) === true) {
                const planeindex = this.planes.indexOf(plane);
                console.log(planeindex);
                this.planes.splice(planeindex, 1);


                Airport.airports[apdestindex].setOrigin(plane);
                Airport.airports[apdestindex].planes.push(plane);
                return 'plane with ID: ' + plane.id + ' has flown from ' + this.name + ' to ' + destination.name;
            }
            else {
                throw new Error('Plane not in origin airport');
            }
            

            }
            else {
                throw new Error('Airport can only fly planes');
            }
    }










/*

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
    */
}

module.exports = {Airport};

const passenger1 = new Passenger('Jack', 123, 456);
const sanFran = new Airport('San Fran');
const london = new Airport('London');
const plane1 = new Plane('abc', 555);
const crewmember = new CrewMem('Jill', 'Captain');
/*
passenger1.addBag(2);
plane1.board(passenger1);
plane1.board(crewmember);
sanFran.setOrigin(plane1);
console.log(plane1.origin);
console.log('san fran runway', sanFran.planes);
console.log('london runway:', london.planes);
sanFran.fly(plane1, london);
console.log('plane flew');
console.log('san fran runway:', sanFran.planes);
console.log('london runway:', london.planes);
*/
sanFran.setOrigin(plane1);
console.log(plane1.origin);
console.log('san fran runway', sanFran.planes);
console.log('london runway:', london.planes);
sanFran.fly(plane1, london);
console.log('san fran planes', sanFran.planes);


