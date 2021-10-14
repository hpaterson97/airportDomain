const {CrewMem} = require('./crewmemClass');

describe('Crew Member Unit Test',()=>{
    test.skip('should throw error if no name entered', ()=>{
        expect(()=>new CrewMem()).toThrowError('Crew Member must have name');
    });
    test.skip('should throw error if no position entered', ()=>{
        expect(()=>new CrewMem('abc')).toThrowError('Crew Member must have position');
    });
    test.skip('should throw error if name entered is not a string', ()=>{
        expect(()=>new CrewMem(123, 'dcf')).toThrowError('Crew Member name must be a string');
    });
    test('should throw error if position entered is not a string', ()=>{
        expect(()=>new CrewMem('123', 123)).toThrowError('Crew Member position must be a string');
    });

});