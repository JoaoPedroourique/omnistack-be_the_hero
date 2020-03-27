const generateUniqueid = require('../../src/utils/generateUniqueid');

describe ('Generate unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueid();
        
        expect(id).toHaveLength(8);
    });
});