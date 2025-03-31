const fibonacci = function(largo) {
    if (largo < 0) {
        return "OOPS"
    }
    array = [0, 1]
    for (let i = 1; i<= largo - 1; i++) {
        actual = array[i -1] + array[i]
        array.push(actual)
    }
    return array[largo]

};

// Do not edit below this line
module.exports = fibonacci;
