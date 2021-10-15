const {Bag} = require('./bagClass');
//PASSENGER CLASS//

class Passenger {
    constructor(name, passNo, seatNo){
        this.name = name;
        this.passNo = passNo;
        this.seatNo = seatNo;
        this.bags = []

        if (!this.name) {
            throw new Error('Passenger must have name');
        };
        if (!this.passNo) {
            throw new Error('Passenger must have passport number');
        };
        if (!this.seatNo) {
            throw new Error('Passenger must have seat number');
        };

    }

    



    addBag(weight){
        const bag = new Bag(weight);
        if (bag.isOverLimit() === true) {
            throw new Error('Bag over weight limit');
        }
        else{
            this.bags.push(new Bag(weight));
        }
        
    }

    
}



//  //


module.exports={Passenger};

