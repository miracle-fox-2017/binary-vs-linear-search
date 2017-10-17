'use strict'

var Benchmark = require('benchmark')




let linearSearch = (search, values) => {
  //write your code here
  for (var i = 0; i < values.length; i++){
    if(search === values[i]){
      return i;
    }
  }
  return -1;
}

function binary_search(search, array) {
  //?Your searching code
  let high = array.length;

  let low = 0;

  while (low <= high) {

    let mid = Math.ceil((low + high) / 2)


    if (array[mid] === search) {
      return mid;
    } else if (search < array[mid]) {
      high = mid - 1;
    } else if (search > array[mid]) {
      low = mid + 1;
    }

  }

  return -1;
}


var arraySeribu = []
var arraySepuluhribu = []
var arraySejuta = []
for ( let i =0; i <= 1000; i++){
  arraySeribu.push(i)
}
for (let i =0; i <= 10000; i++){
  arraySeribu.push(i)
}
for ( let i =0; i <= 1000000; i++){
  arraySeribu.push(i)
}
var suite = new Benchmark.Suite
suite.add('binary_searchSeribu#test', function(){
	binary_search(24, arraySeribu);
})
.add('linear_searchSeribu#test', function(){
	linearSearch(24, arraySeribu);
})
// sepuluh ribu
.add('binary_searchSepuluhribu#test', function(){
	binary_search(90, arraySepuluhribu);
})
.add('linear_searchSepuluhribu#test', function(){
	linearSearch(90, arraySepuluhribu);
})
// sejuta
.add('binary_searchSejuta#test', function(){
	binary_search(100009, arraySejuta);
})
.add('linear_searchSejuta#test', function(){
	linearSearch(100009, arraySejuta);
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
