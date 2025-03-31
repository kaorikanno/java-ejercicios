const getTheTitles = function(libros) {
    let array = [libros[0].title]
    for (let i = 1; i <= libros.length - 1; i++) {
        array.push(libros[i].title)
    }
    return array
};

// Do not edit below this line
module.exports = getTheTitles;
