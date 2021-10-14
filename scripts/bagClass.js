//BAG CLASS//

class Bag {
    constructor(weight){
        this.weight = weight;

        if (!this.weight) {
            throw new Error('Bag must have weight');
        };
        if (typeof this.weight !== 'number') {
            throw new Error('Weight must be a number');
        };
    }
    isOverLimit() {
        if (this.weight > 20) {
            return true
        }
        else {
            return false
        }
    };
}

module.exports = {Bag}