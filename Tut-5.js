let number1 = prompt('Enter Number 1:');
let number2 = prompt('Enter Number 2:');

let temp;

temp = number1;
number1 = number2;
number2 = temp;

// [number1, number2] = [number2, number1];

console.log(`Number1: ${number1}`);
console.log(`Number2: ${number2}`);
