function filter(arr, someFn) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(someFn(arr[i]) === true) {
            result.push(arr[i]);
        }
    }
    return result;
}

let a = [1, 2, 3, 6, 7];

function greaterThan(than) {
    return function (number) {
        return number > than;
    }
}

let result = filter(a, greaterThan(1));

console.log(result);