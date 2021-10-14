const {Plane} = require('./planeClass');
const {Passenger} = require('./passengerClass');

describe('Plane Unit Test', ()=>{
    test('should throw error if plane has no type', ()=>{
        expect(()=>new Plane()).toThrowError('Plane must have type');
    });
    test('should throw error if plane type is not a string', ()=>{
        expect(()=>new Plane(123)).toThrowError('Plane type must be a string');
    });
});