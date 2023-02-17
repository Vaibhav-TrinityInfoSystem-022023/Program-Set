// const num1 = parseInt(prompt('Enter Number1: '));
// const num2 = parseInt(prompt('Enter Number2: '));

function gcd(a, b) {
      if (b == 0) return a;
      return gcd(b, a % b);
}

function lcm(a, b) {
      return (a / gcd(a, b)) * b;
}

console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}. `);
