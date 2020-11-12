const  expect  = require("chai").expect
const assert = require("chai").assert
const sum = require('../index.js').sum
const sort = require('../index.js').sort


describe ('sum', function(){
    it('should return the sum of all elements', function(){
        let array = [1,2,3,4,5]
        expect(sum(array)).to.equal(15)
    });
    it('should return an integer', function(){
        expect(typeof sum([1,2,3,4,5])).to.equal('number')
    })
}) 

describe('sort', function(){
    it('should sort an array from low to high', function(){
        let result = sort([3,1,4,2,5])
        assert(result, [1,2,3,4,5])
    })
})
