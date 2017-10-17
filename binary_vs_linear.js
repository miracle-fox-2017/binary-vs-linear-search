let createArr = totalArr => {
	let newArr = [];
	for (let i = 1 ; i<totalArr ; i++){
		newArr.push(i)
	}
	return newArr;
}
var arr = createArr(1000000);

function linearSearch(target, arr){
	target = 1;
 	for ( let prop in arr){
 		if (arr[prop] === target){
 			return prop;
 		}
 	}
 	return -1;
}

function binarySearch(target, arr){
  target = 1;
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start+end)/2);
  while (target !== arr[mid]){
  	if (target >= arr[mid]){
  		start = mid+1;
  		end = arr.length;
  		mid = Math.floor((start+end)/2);
  	}
  	if (target <= arr[mid]){
  		start = 0;
  		end = mid-1;
  		mid = Math.floor((start+end)/2);
  	}else {
	  	return -1
	  }  	
  }
  return mid;
}
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
suite.add('Linear', function(){
	target = 1;
	linearSearch(1,arr)
})
.add('Binary', function(){
  target = 1;
  binarySearch(target, arr)
})

.on('cycle', function(event){
	console.log(String(event.target));
})

.on('complete', function benchmarkComplete(){
	console.log('Fastest is ' + this.filter('fastest').map('name'));
})

.run({ 'async': true});