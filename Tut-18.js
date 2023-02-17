const val = parseInt(prompt('Enter number: '));
debugger;
let first = 0,
      second = 1,
      third;

console.log('Fibonacci Series:');
console.log(first); // print 0
console.log(second); // print 1

third = first + second;

while (third < val) {
      console.log(third);

      first = second;
      second = third;
      third = first + second;
}
