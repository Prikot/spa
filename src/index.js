/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    return arg;
}

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b) {
    let result;
    result = 0;

    if (b === undefined) {
        b = 100;
    }
    result = a + b;
    return result;
}

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
    var result;
    result = [];
    for(var i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }

    return result;
}

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    return fn();
}

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(x = 0) {
    return function F() {
        return ++x;
    };
}

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(F, a, b) {
    F = F.bind(null, a, b);
    return F;
}

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
