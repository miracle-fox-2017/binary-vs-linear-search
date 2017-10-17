const Benchmark = require('benchmark');
const tes1 = new Benchmark.Suite;
const tes2 = new Benchmark.Suite;
const tes3 = new Benchmark.Suite;
// add tests
// let binarySeacrh = (search, array) => {
//     let orderedData = ownSort(array);
//     let startIndex = 0;
//     let highIndex = orderedData.length - 1;
//     console.log(orderedData)
//     while (startIndex <= highIndex) {
//         let midIndex = Math.floor((startIndex + highIndex) / 2)
//         if (search === orderedData[midIndex]) {
//             return midIndex;
//         } else {
//             if (search < orderedData[midIndex]) {
//                 highIndex = midIndex - 1;
//             } else if (search > orderedData[midIndex]) {
//                 startIndex = midIndex + 1;
//             }
//         }
//     }
//     return -1;
// }

function binarySearch (arr, search, start, end) {
  // Your searching code

    let mid = Math.ceil((start + end)/2)

    if(arr[mid] === search){
        return mid
    }

    if(start === end){
        return -1
    }

    if(arr[mid]>search){
        return binarySearch(arr, search, start, mid-1)
    }

    if(arr[mid]<search){
        return binarySearch(arr, search, mid+1, end)
    }
}

let linearSearch = (target, values) => {
  //write your code here
  for(let i=0; i<values.length-1; i++){
    if(target ===values[i]){
        return i
    }
  }
  return -1
}

let tes1arr = []
let tes2arr = []
let tes3arr = []

for (let i=1; i<1000; i++) {
    tes1arr.push(i)
}

for (let j=1; j<10000; j++) {
    tes2arr.push(j)
}

for (let k = 1; k < 1000000; k++) {
    tes3arr.push(k)
}

let targetTes1 = Math.floor(Math.random() * 1000)
let targetTes2 = Math.floor(Math.random() * 10000)
let targetTes3 = Math.floor(Math.random() * 1000000)

tes1.add('LinearSearch', function () {
    linearSearch(targetTes1, tes1arr);
})
    .add('BinarySearch', function () {
        binarySearch(tes1arr, targetTes1, 0, tes1.length);
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
    
    tes2.add('LinearSearch', function () {
        linearSearch(targetTes2, tes2arr);
    })
    .add('BinarySearch', function () {
        binarySearch(tes2arr, targetTes2, 0, tes2.length);
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });

    tes3.add('LinearSearch', function () {
        linearSearch(targetTes3, tes3arr);
    })
    .add('BinarySearch', function () {
        binarySearch(tes3arr, targetTes3, 0, tes3.length);
    })

    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });