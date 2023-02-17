// console.log('Running');

// const fact = parseInt(prompt('Enter the number you want to find factorial: '));

if (fact < 0) {
      console.log('Negative Number Not Allowed..');
} else if (fact === 0) {
      console.log(`Factorial of ${fact}`);
} else {
      let val = 1;
      for (let i = 1; i <= fact; i++) {
            val *= i;
      }
      console.log(`Factorial of ${fact} is ${val}`);
}
