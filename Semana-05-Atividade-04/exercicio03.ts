function reverseArray<T extends string | number>(array: T[]): T[] {
    return array.slice().reverse();
  }
  

const numberArray = [20, 30, 40, 50];
const stringArray = ['oi', 'tudo bem?', 'como vai ?'];

console.log(reverseArray(numberArray));
console.log(reverseArray(stringArray));