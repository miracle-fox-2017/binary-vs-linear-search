var Benchmark = require('benchmark');



var seribu = [];
var sejuta = [];
var seratus = [];

for(var i = 1; i <= 1000; i++){
    seribu.push(i)
}
for(var i = 1; i <= 1000000; i++){
    sejuta.push(i)
}
for(var i = 1; i <= 100; i++){
    seratus.push(i)
}

let globalLinearSearch = (target, values) => {
    //write your code here
    var hasil = [];
    for(var i = 0; i < values.length;i++){
      if (values[i] == target){
        hasil.push(i)
      }
    }
    return hasil
  }

  function ownSort(arr) {
    
  
    for (var i = 1; i < arr.length; i++) {
      for (var j = 0; j < i; j++) {
        var temp = arr[i];
        if (arr[i] < arr[j]) {
  
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
  
    }
    
    return arr
  }
  
  function binary_search(search, array, idxStart = 0, idxEnd = array.length - 1) {

    if (idxStart <= idxEnd) {
      var idxMid = Math.round((idxStart + idxEnd) / 2);
  
      if (array[idxMid] > search) {
        
        return binary_search(search, array, idxStart, idxMid - 1)
  
        
      } else if (array[idxMid] < search) {
        return binary_search(search, array, idxMid + 1, idxEnd)
  
      }
      
      return idxMid
    }
    return -1
  }

var suite = new Benchmark.Suite;

//tests

suite.add('globalLinearSearch', function() {
    globalLinearSearch(123909, sejuta)
})
    .add('binary_search', function(){
        binary_search(123909,sejuta)
    })

//add listeners

.on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });