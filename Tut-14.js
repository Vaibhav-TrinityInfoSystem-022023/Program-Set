const a = prompt('Enter Number:');
isPrime = true;

if (a === 1) {
      console.log('1 is Neutral Number.');
} else if (a > 1) {
      for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                  isPrime = false;
                  break;
            }
      }
}
if (isPrime) {
      console.log(`${a} is a prime number`);
} else {
      console.log(`${a} is a not prime number`);
}
