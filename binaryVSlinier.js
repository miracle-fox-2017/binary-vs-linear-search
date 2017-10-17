'use strict'
var Benchmark = require('benchmark');

function binary_search (search, array) {
  let startIndex = 0;
  let highIndex = array.length;
  while (startIndex <= highIndex){
    let midIndex = Math.floor((startIndex + highIndex) / 2);

    if (array[midIndex] === search){
      return midIndex;
    }
    else if (array[midIndex] < search) {
      startIndex = midIndex + 1;
    }
    else if (array[midIndex] > search) {
      highIndex = midIndex - 1;
    }
  }
  return -1;
}

let linearSearch = (target, values) => {
  for (var x = 0; x < values.length; x++){
    if (target == values[x])
    return x;
  }
  return -1;
}



let arr1000 = [];
let arr10000 = [];
let arr1000000 = [];

for (let i = 1; i <= 1000; i++){
  arr1000.push(i);
}
for (let i = 1; i <= 10000; i++){
  arr10000.push(i);
}
for (let i = 1; i <= 1000000; i++){
  arr1000000.push(i);
}

let tester = new Benchmark.Suite;

// add tests
tester.add('BinarySearch', function() {
  binary_search(989, arr1000);
})
.add('LinearSearch', function() {
  linearSearch(989, arr1000);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
