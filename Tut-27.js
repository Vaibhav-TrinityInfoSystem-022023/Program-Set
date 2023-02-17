const value = prompt('Enter the number of terms: ');

function fibonacci(num) {
      if (num < 2) {
            return num;
      } else {
            return fibonacci(num - 1) + fibonacci(num - 2);
      }
}

for (let i = 0; i < value; i++) {
      console.log(fibonacci(i));
}
