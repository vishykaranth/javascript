const simpleMath = require('./simpleMath')
const assert = require('chai').assert 

describe('Math module', () => {
    it('should add 3 and 4 and return 7', () => {
        const result = simpleMath.add(3, 4);
        assert.equal(7, result);
    });    
});