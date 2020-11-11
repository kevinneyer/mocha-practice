const { expect } = require("chai")

describe ('#sum()', function() {
    it('adds all the elements of an array', function () {
        expect(sum([1,2,3,4,5]).to.equal(15))
    })
}) 