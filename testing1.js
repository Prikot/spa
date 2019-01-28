function calculator(number = 0) {
    if (typeof(number) != 'number') {
        throw new Error("number is not a number");
    }

    var obj = {
        sum: function () {
            for(var i = 0; i < arguments.length; i++) {
                var x = 0;
                x += arguments[i];
            }
            return x;
        }
        // dif: function (value) {
        //     return (this.number - value);
        // },

    }

}

var result = calculator(10);
console.log(result);







// function isAllTrue(array, fn) {
//     if (typeof(fn) != 'function') {
//         throw new Error('fn is not a function');
//     }
//     if (!Array.isArray(array)) {
//         throw new Error('not array');
//     }
//
//     if (!array.length) {
//         throw new Error('empty array');
//     } else {
//
//         for (var i = 0; i < array.length; i++) {
//             var z = fn(array[i]);
//             if (z == false) {
//                 y++;
//             } else if (z == true) {
//                 x++;
//             }
//             if (array.length == x) {
//                 return true;
//             } else if (y > 0) {
//                 return false;
//             }
//         }
//     }
//
//     console.log(fn(array));
//     return fn(array);
// }
//
// try {
//     isAllTrue(array, fn);
// } catch (e) {
//     console.error(e.message);
// }