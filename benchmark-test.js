var Benchmark = require('benchmark');
var seribuSuite = new Benchmark.Suite;
var sepuluhRbSuite = new Benchmark.Suite;
var satuJtSuite = new Benchmark.Suite;

// Linear Search
let linearSearch = (target, values) => {
  for (var i = 0; i < values.length; i++) {
    if(target == values[i]){
      return i
    }
  }
  return -1
}

// Binary Search
let binarySearch = (search, array) => {
  let front = 0,
  back = array.length-1;
  while(front<=back){
    let mid = Math.floor((front+back)/2)
    if(search > array[mid]){
      front = mid+1
    }else if(search < array[mid]){
      back = mid-1
    }else{
      return mid
    }
  }
  return -1
}

let seribu = [],
    sepuluhRb = [],
    satuJt = [];

for (var i = 1; i <= 1000; i++) {
  seribu.push(i)
}
for (var i = 1; i <= 10000; i++) {
  sepuluhRb.push(i)
}
for (var i = 1; i <= 1000000; i++) {
  satuJt.push(i)
}

// Test Array Seribu
seribuSuite.add('LinearSearch#seribu', function() {
  linearSearch(500, seribu);
})
.add('BinarySearch#seribu', function() {
  binarySearch(500, seribu)
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


// Test Array Sepuluh Ribu
sepuluhRbSuite.add('LinearSearch#sepuluhRb', function() {
  linearSearch(500, sepuluhRb);
})
.add('BinarySearch#sepuluhRb', function() {
  binarySearch(500, sepuluhRb)
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


// Test Array Satu Juta
satuJtSuite.add('LinearSearch#satuJt', function() {
  linearSearch(500, satuJt);
})
.add('BinarySearch#satuJt', function() {
  binarySearch(500, satuJt)
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
