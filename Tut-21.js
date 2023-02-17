// const val = prompt('Which operation perform: + - x / ');
// const first = parseFloat(prompt('Number 1:'));
// const second = parseFloat(prompt('Number 2:'));

// debugger;
var value;
switch (val) {
      case '+':
            value = first + second;
            console.log(`${value}`);
            break;
      case '-':
            value = first - second;
            console.log(`${value}`);
            break;
      case 'x':
            value = first * second;
            console.log(`${value}`);
            break;
      case '/':
            value = first / second;
            console.log(`${value}`);
            break;
}
