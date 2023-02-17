const num1 = parseInt(prompt('Enter first number'));
const num2 = parseInt(prompt('Enter first number'));

const val1 = num1 % 10;
const val2 = num2 % 10;

if (val1 == val2) {
      console.log('Number Last Digit is Same');
} else {
      console.log('Number Last Digit is Different');
}
