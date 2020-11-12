 module.exports = {
    sum: function(array) {
        return array.reduce((a,b) => (a + b), 0)
    },
    sort: function(array) {
        return array.sort((a,b) => a < b ? -1 : 1)
    }
 }