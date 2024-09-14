function reverseArray(array) {
    return array.slice().reverse();
}
var numberArray = [20, 30, 40, 50];
var stringArray = ['oi', 'tudo bem?', 'como vai ?'];
console.log(reverseArray(numberArray));
console.log(reverseArray(stringArray));
