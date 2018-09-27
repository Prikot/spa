
function defaultParameterValue(a, b) {
    "use strict";
    var result = 0;

    if (b === undefined) {
         b = 100;
    }
    result = a + b;
    return result;
}

function returnArgumentsArray() {
    var result;
    result = [];
    for(var i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }

    return result;
}
function returnCounter(number) {
    var result;
    if(number === undefined) {
        number = 0;
        return number;
    }

    function F(number) {
        number = number + 1;
        return number;
    }

    return F();
}

console.log(returnCounter(2);