var expect = require('chai').expect;
var lib = require('../../index.js');

describe('some math functions api', function() {
    it('Should have isPointInsideCircle function',function(){
        expect(lib).to.have.property('isPointInsideCircle');
    })
})