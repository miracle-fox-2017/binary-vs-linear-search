var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

//generate array 1000
var array = [];
var i = 0;
while(i<1000000){
  array.push(Math.floor(Math.random() * 1000000));
  i++;
}

// add tests
suite.add('linearSearch#test', function() {

  let linearSearch = (target, values) => {
    //write your code here
    var pointer = 0;
    while(values.length > pointer){
      //cek random_numbers == target, pointer juga disimpan
      if(values[pointer] == target){
        return pointer;
      } else {
        pointer += 1;
      }
    }
    return -1;
  }

  let random_numbers = array;
  linearSearch(1, random_numbers);

})
.add('binarySearch#test', function() {

  function ownSort(arr) {
    // Your sorting code
    //selection sort, ambil yang terkecil, tampung di tempat yang baru
    var pointer = 0;
    var kecil = 0;
    var besar = 0;
    var sorted = [];
    var loops = arr.length;
    while(loops>1){
      //cari yang kecil
      if(arr.length>2){
        kecil = arr[0];
        for(var i = 0; i<arr.length; i++){
          if(kecil>arr[i]){
            kecil = arr[i];
            pointer = i;
          }
        }

      //push ke tempat baru
      sorted.push(kecil);

      } else {
        if(arr[0]>arr[1]){
          kecil = arr[1];
          besar = arr[0];
        } else {
          kecil = arr[0];
          besar = arr[1];
        }
        sorted.push(kecil);
        sorted.push(besar);
        break;
      }

      //hapus yang terkecil dari array
      arr.splice(pointer,1);
      pointer = 0;

      loops -= 1;

    }

    return sorted;
  }

  function binary_search (search, array) {
    // Your searching code
    //min, max, max
    debugger;
    var min = 0;
    var max = array.length;
    var mid = Math.floor(array.length/2);
    var count = 0;

    //if mid == search.... return mid
    if(array[mid] == search){
      return mid;
    }

    while(array[mid] != search){
      //if search > mid.... masuk geng besar
      if(search > array[mid]){
        //geng besar
        //max = tetep, min = mid, mid = max+min/2
        min = mid;
        mid = Math.floor((max+min)/2);
        //cek if mid == search return mid
        if(array[mid] == search){
          return mid;
        }
      } else {
      //else search < mid.... masuk geng kecil
        //geng kecil
        //max = mid, min = tetep, mid = max+min/2
        max = mid;
        mid = Math.floor((max+min)/2);
        //cek if mid == search return mid
        if(array[mid] == search){
          return mid;
        }
      }

      //if jumlah looping > panjang array return -1
      if(count>array.length){
        return -1;
      }

      count += 1;
    }

  }

  let random_numbers = array;
  var arraySorted = ownSort(random_numbers);
  binary_search(1, arraySorted);

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
