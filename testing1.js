function isAllTrue(array, fn) {
    "use strict";
    for (var i = 0; i < array.length; i++) {
        try {
            if (typeof(fn) !== 'function') {
                throw new Error('F не функция');
            }
            if (array.length === 0) {
                throw new Error('Empty array');
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    console.log(array.length);

    return true;
}

function f(number) {
    if(number > 1){
        return true;
    } else return false;
}

var result = isAllTrue([], f);

console.log(result);