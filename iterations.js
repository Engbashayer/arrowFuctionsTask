function PrintIt(x) {
  console.log(x);
}

const rests = ["No", "ma", "Well"];
rests.forEach(PrintIt);

let numbers = [1, 2, 3, 4];

function sqIT(x) {
  return x * x;
}

const sqared = numbers.map(sqIT);
console.log(sqared);

let budgets = [10, 100, 1, 100000];

function filterIT(x) {
  return x > 100;
}

// function sqIT (x){
//   return x*x;
// }
const accptable = budgets.filter(filterIT).map(sqIT);

console.log(accptable);
