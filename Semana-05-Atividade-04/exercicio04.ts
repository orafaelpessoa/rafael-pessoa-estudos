function processInput (value: number):  number;
function processInput (values: number[]): number;
function processInput (input: number | number[]): number[] | number {
    
if (typeof input === 'number') {
    return input * input;
}

else {
    return input.map( item => item * item);
    }   
}

console.log(processInput(4));
console.log(processInput([8, 9, 10]))