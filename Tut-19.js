let sum = 0;
const number = prompt('Enter a number: ');
const len = number.length;

// debugger;
let temp = number;
while (temp > 0) {
      let remainder = temp % 10;

      sum += Math.pow(remainder, len);

      temp = parseInt(temp / 10);
}
if (sum == number) {
      console.log(`${number} is an Armstrong number`);
} else {
      console.log(`${number} is not an Armstrong number.`);
}
