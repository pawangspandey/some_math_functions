var expect = require('chai').expect;
var lib = require('../../index.js');

describe('some math functions api', function() {
    it('Should have isPointInsideCircle function',function(){
        expect(lib).to.have.property('isPointInsideCircle');
    });
    
    describe('isPointInsideCircle api',function(){
        it('Should throw exception point and center should be object',function(){
            expect(lib.isPointInsideCircle.bind(lib,"some bad thing","some bad ","bad")).to.throw('point and center should be object');
        });

        it('Should return boolean value',function(){
            expect(lib.isPointInsideCircle({latitude:19.1344,longitude:73.1445},{latitude:19.1344,longitude:73.1445},500)).to.a('boolean');
        });        
    });
})