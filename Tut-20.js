const Fisrt = parseInt(prompt('Enter a first number: '));
const Second = parseInt(prompt('Enter a second number: '));

console.log('Armstrong Numbers:');
// debugger;
for (let i = Fisrt; i <= Second; i++) {
      let numberOfDigits = i.toString().length;

      let sum = 0;

      let temp = i;

      while (temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            temp = parseInt(temp / 10);
      }

      if (sum == i) {
            console.log(i);
      }
}
