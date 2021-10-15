const {Bag} = require('./bagClass');
const {Person} = require('./personSupClass');
//PASSENGER CLASS//

class Passenger extends Person{
    constructor(name, passNo, seatNo){
        super(name);
        this.passNo = passNo;
        this.seatNo = seatNo;
        this.bags = []

        if (!this.name) {
            throw new Error('Passenger must have name')
        }
        if (!this.passNo) {
            throw new Error('Passenger must have passport number')
        }
        if (!this.seatNo) {
            throw new Error('Passenger must have seat number')
        }

    }

    
}



//  //


module.exports={Passenger};

