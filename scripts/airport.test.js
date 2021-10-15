const {Airport} = require('./airportClass');
const {Plane} = require('./planeClass');



describe('Airport Unit Test', ()=>{
    test('should throw error if airport has no name', ()=>{
        expect(()=>new Airport()).toThrowError('Airport must have name');
    });
    test('should throw error if airport name is not a string', ()=>{
        expect(()=>new Airport(123)).toThrowError('Airport name must be a string');
    });
    
});