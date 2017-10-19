// Linear Search
'use strict'
console.log("Linear Search")
let linearSearch = (target, values) => {
  for(var i = 0; i < values.length; i++){
    if(values[i] === target){
      return i
    }
  }
  return -1
}
let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

// Binary Search
'use strict'
var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]
function ownSort(arr) {
  for(var i = 1; i <= arr.length-1; i++){
    for(var j = 0; j < i - 1; j++){
      if(arr[i] < arr[j]){
        var tampung = arr[i]
        arr[i] = arr[j];
        arr[j] = tampung;
      }
    }
  }
  console.log(arr)
  return arr
}
function binary_search (search, array) {
  var highIndex = array.length;
  var startIndex = 0;
  while(startIndex <= highIndex){
    var midIndex = Math.floor((startIndex + highIndex)/2);
    console.log(midIndex);
    if(array[midIndex] === search){
      return midIndex;
    }
    else if(array[midIndex] < search){
      startIndex = midIndex+1
    }
    else if(array[midIndex] > search){
      highIndex = midIndex-1
    }
  }
  return -1;
}
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Benchmark
var Benchmark = require('benchmark');
var suite = new benchmark.Suite;

// add tests
suite.add("Linear Search", linearSearch) {
  // /o/.test('Hello World!');
})
.add("Binary Search", binary_search) {
  // 'Hello World!'.indexOf('o') > -1;
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
