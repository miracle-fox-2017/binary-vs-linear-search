var Benchmark = require('benchmark')

var seribu = new Benchmark.Suite
var sepuluhribu = new Benchmark.Suite
var sejuta = new Benchmark.Suite

var test1k = []
var test10k = []
var test1jt = []

//test 1k
for(var i = 1; i <= 1000; i++) {
  test1k.push(i)
}

//test 10k
for(var i = 0; i <= 10000; i++) {
  test10k.push(i)
}

//test10jt
for(var i = 0; i< 1000000; i++) {
  test1jt.push(i)
}

var random1k = Math.floor(Math.random() * 1000) + 1
var random10k = Math.floor(Math.random() * 10000) + 1
var random1jt = Math.floor(Math.random() * 1000000) + 1

var linear_search = function (num, array) {
  for(var i = 0; i < array.length; i++) {
    if(num == array[i]) {
      return i
    }
  }
  return -1
}

var binary_search = function(num, array) {
  var atas = array.length
  var bawah = 0

  while(atas >= bawah) {
    var tengah = Math.floor((atas + bawah) / 2)

    if(num > array[tengah]) {
      bawah = tengah + 1
    }
    else if(num < array[tengah]) {
      atas = tengah - 1
    }
    else if(num == array[tengah]) {
      return tengah
    }
  }
  return -1
}


//benchmark 1K

//add test
seribu.add('testlinear1k', function() {
  linear_search(random1k, test1k)
})
.add('testbinary1k', function() {
  binary_search(random1k, test1k)
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
//
//
// //benchmark 10K
//
// //add test
seribu.add('testlinear10k', function() {
  linear_search(random10k, test10k)
})
.add('testbinary10k', function() {
  binary_search(random10k, test10k)
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


//benchmark 1jt

//add test
seribu.add('testlinear1jt', function() {
  linear_search(random1jt, test1jt)
})
.add('testbinary1jt', function() {
  binary_search(random1jt, test1jt)
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
