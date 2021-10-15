
const {Bag} = require('./bagClass');


describe('Bag Unit Test', ()=>{
    test('should throw an error if bag has no weight', ()=>{
        expect(()=>new Bag()).toThrowError('Bag must have weight');
    });
    test('should throw an error if the weight value is NaN', ()=>{
        expect(()=>new Bag('abc')).toThrowError('Weight must be a number');
    });
    test('isOverLimit() should return true if weight is over specified amount', ()=>{
        expect(new Bag(50).isOverLimit()).toBe(true);
    });
});