function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        number = numbers_1[_a];
        sum += number;
    }
    return sum;
}
console.log(sumNumbers(23, 10, 48, 25, 22));
