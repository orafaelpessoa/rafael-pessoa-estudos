function processInput(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else {
        return input.map(function (item) { return item * item; });
    }
}
console.log(processInput(4));
console.log(processInput([8, 9, 10]));
