//debugger;
const num1 = prompt('Enter first number: ');
const num2 = prompt('Enter second number: ');
const num3 = prompt('Enter third number: ');

if (num1 >= num2 && num1 >= num3) {
      console.log('The largest number is ' + num1);
} else if (num2 >= num1 && num2 >= num3) {
      console.log('The largest number is ' + num2);
} else {
      console.log('The largest number is ' + num3);
}
