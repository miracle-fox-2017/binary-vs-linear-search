let Benchmark = require('benchmark')
var testSuite0 = new Benchmark.Suite;
var testSuite1 = new Benchmark.Suite;
var testSuite2 = new Benchmark.Suite;



// function
let linearSearch = (target, values) => {
  //write your code here
  for(let i=0; i < values.length; i++){
    if(target == values[i]){
      return i
    }
  }
  return -1
}

function binary_search (search, array) {
  // Your searching code
  let start = 0
  let end   = array.length
  // console.log(end + ' < length======arr > ' + array)

  while(start <= end){
    let mid = Math.floor((start + end)/2)
    // console.log('-=-=-=-' + array[mid])
    if(array[mid] === search){
      return `${true} | indeks = ${mid}`
    }else if(search > array[mid]){
      start = mid + 1
    }else if(search < array[mid]){
      end = mid - 1
    }
  }
  return `${false} -1`
}


// add data

let seribu = []
let sepuluhRibu = []
let satuJuta = []

for(let i=0; i<1000; i++){
  seribu.push(i)
}

for(let j=0; j<10000; j++){
  sepuluhRibu.push(j)
}

for(let k=0; k<1000000; k++){
  satuJuta.push(k)
}


// benchmark = test = seribu

// add tests
testSuite0.add('LinearTest', function() {
  linearSearch(750,seribu);
})
.add('BinaryTest', function() {
  binary_search(750, seribu);
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log(' Testcase, Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });


// benchmark = test = sepuluhRibu

// add tests
testSuite0.add('LinearTest', function() {
  linearSearch(9750,sepuluhRibu);
})
.add('BinaryTest', function() {
  binary_search(9750, sepuluhRibu);
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log(' Testcase, Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });



// benchmark = test = satuJuta

// add tests
testSuite0.add('LinearTest', function() {
  linearSearch(970550,satuJuta);
})
.add('BinaryTest', function() {
  binary_search(970550, satuJuta);
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log(' Testcase, Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });
