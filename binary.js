'use strict'
var Benchmark = require('benchmark');

var test_seribu = new Benchmark.Suite
var test_sepuluhribu = new Benchmark.Suite
var test_sejuta = new Benchmark.Suite


let linearSearch = (search, target)=> {
	for(var i = 0; i < target.length; i++){
		if(i == search){
			return i
		}
	}
}

let binarySearch = (search, target)=>{
	let start = 0,
		end = target.length-1
	while(start <= end){
		let mid = Math.floor((start + end) / 2)
		if(mid > search){
			end = mid - 1
			return mid
		}
		else if(mid < search){
			start = mid + 1
			return mid
		}
	}
	return -1
}




let seribu =[],
	sepuluhribu =[],
	sejuta = []

for(var i = 0; i < 1000; i++){
	seribu.push(i)
}

for(var i = 0; i < 10000; i++){
	sepuluhribu.push(i)
}

for(var i = 0; i < 1000000; i++){
	sejuta.push(i)
}

let random_seribu = Math.floor(Math.random() * 1000)+1
let random_sepuluh_ribu = Math.floor(Math.random() * 10000)+1
let random_sejuta = Math.floor(Math.random() * 1000000)+1



var suite = new Benchmark.Suite;

// add tests
test_seribu.add('test_linear_seribu', function(){
	linearSearch(random_seribu, seribu)
}).add('test_binary_seribu', function(){
	binarySearch(random_seribu, seribu)
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



test_sepuluhribu.add('test_linear_sepuluh_ribu', function(){
	linearSearch(random_sepuluh_ribu, sepuluhribu)
}).add('test_binary_sepuluh_ribu', function(){
	binarySearch(random_sepuluh_ribu, sepuluhribu)
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




test_sejuta.add('test_linear_sejuta', function(){
	linearSearch(random_sejuta, sejuta)
}).add('test_binary_sejuta', function(){
	binarySearch(random_sejuta, sejuta)
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
