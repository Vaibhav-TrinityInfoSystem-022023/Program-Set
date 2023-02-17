const a = prompt('Enter A: ');
const b = prompt('Enter B: ');
const c = prompt('Enter C: ');

const d = b * b - 4 * a * c;

let root1, root2;

// input the value of 1, -7, 12

if (d > 0) {
      root1 = (-b + Math.sqrt(d)) / (2 * a);
      root2 = (-b - Math.sqrt(d)) / (2 * a);
      console.log(`The roots are ${root1} & ${root2}`);
}

if (d == 0) {
      root1 = root2 = -b / (2 * a);
      console.log(`The roots are ${root1} & ${root2}`);
}
