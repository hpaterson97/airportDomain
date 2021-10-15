const {Passenger} = require('./passengerClass');

describe('Passenger Unit Test', () => {
    test('should throw an error if passenger has no name', ()=> {
        expect(()=>new Passenger()).toThrowError('Passenger must have name');
    });
    test('should throw an error if passenger has no passport number', () => {
        expect(()=>new Passenger('abc')).toThrowError('Passenger must have passport number');
    });
    test('should throw an error if passenger has no seat number', () => {
        expect(()=>new Passenger('abc', 1234)).toThrowError('Passenger must have seat number');
    });
});