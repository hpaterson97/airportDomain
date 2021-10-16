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
            throw new Error('Airport must have name') //throws error if name is not given when creating an airport
        }
        if(typeof this.name !== 'string') {
            throw new Error('Airport name must be a string') //throws error if name given is not a string when creating an airport
        }
    }
    setOrigin(plane) {
        plane.origin = this.name; //sets the origin of the plane given to this airport and pushes the plane onto the this airport's runway
        this.planes.push(plane);
    }

    fly(plane, destination) {
        const dest = destination;
        const newflightno = dest.name + plane.flightNo; //gives updated flight number i.e. first 3 letters of flight number should be the destination's airport name
        if(this.name !== plane.origin){
            throw new Error('Plane is not on ' + this.name + "'s runway"); //throws error if plane that is to fly from this airport is not in the airport's runway
        }
        else {
            
            const apdestindex = Airport.airports.indexOf(dest); //finding the index of the destination airport in the array of created airports

            if (plane instanceof Plane) { 
                
                const planeindex = this.planes.indexOf(plane); //finds the index of the plane given in the origin airport's plane array
                this.planes.splice(planeindex, 1); //removes said plane from the origin airport's array
                
                Airport.airports[apdestindex].setOrigin(plane); //sets the plane's new origin as the destination airport's name             
                return plane.name + ' with flight number: ' + newflightno + ' has flown from ' + this.name + ' to ' + dest.name; //plane.flightNo = ogflightno;
                // describes what has effectively happened: plane with flight number: (should contain destination airport's code/name and then planes id/number)
                // has flown from origin airport to destination airport and now it's origin has been updated to represent the fact that it has flown to a different airport
            }   // flight number has been reset to original flight number (without airport code in front)

            else { //if plane was not created from the Plane class then it is not recognised as a plane
                throw new Error('Only scheduled planes can be on runway');
            }
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


const sanFran = new Airport('SFR');
const london = new Airport('LDN');
const plane1 = new Plane('plane 1', 55567);
const plane2 = new Plane('plane 2', 12345);

const crewmember1 = new CrewMem('Jill', 'Captain');
const passenger1 = new Passenger('Jack', 123, 456);


plane1.board(crewmember1);
plane1.board(passenger1);


london.setOrigin(plane2);

sanFran.setOrigin(plane1);
console.log('Planes currently on SFR runway: ', sanFran.planes);
console.log('Planes currently on LDN runway: ', london.planes);
console.log(sanFran.fly(plane1, london));
console.log(london.fly(plane2, sanFran));
console.log('Planes currently on SFR runway: ', sanFran.planes);
console.log('Planes currently on LDN runway: ', london.planes);





