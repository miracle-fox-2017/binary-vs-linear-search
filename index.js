"use strict"

var Benchmark = require('benchmark');
var testSeribu = new Benchmark.Suite;
var testSepuluhRibu = new Benchmark.Suite;
var testSejuta = new Benchmark.Suite;

// add tests

let binarySearch = (search, array) => {
    let orderedData = array;
    let startIndex = 0;
    let highIndex = orderedData.length - 1;
    while (startIndex <= highIndex) {
        let midIndex = Math.floor((startIndex + highIndex) / 2)
        if (search === orderedData[midIndex]) {
            return midIndex;
        } else if (search < orderedData[midIndex]) {
            highIndex = midIndex - 1;
        } else if (search > orderedData[midIndex]) {
            startIndex = midIndex + 1;
        }
    }
    return -1;
}

let linearSearch = (target, values) => {
    for (let i = 0; i < values.length; i++) {
        if (target == values[i]) {
            return i
        }
    }
    return -1;
}


let seribu = [];
for (let i = 1; i < 1000; i++) {
    seribu.push(i)
}

let sepuluhRibu = []
for (let j = 1; j < 10000; j++) {
    sepuluhRibu.push(j)
}

let sejuta = []
for (let k = 1; k < 1000000; k++) {
    sejuta.push(k)
}

let searchRandomSeribu = Math.floor(Math.random() * 1000)
let searchRandomSepuluhRibu = Math.floor(Math.random() * 10000)
let searchRandomSejuta = Math.floor(Math.random() * 1000000)


testSeribu.add('Linear Search', function () {
    linearSearch(searchRandomSeribu, seribu)
})
    .add('Binary Search', function () {
        binarySearch(searchRandomSeribu, seribu)
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


testSepuluhRibu.add('Linear Search', function () {
    linearSearch(searchRandomSepuluhRibu, sepuluhRibu);
})
    .add('Binary Search', function () {
        binarySearch(searchRandomSepuluhRibu, sepuluhRibu);
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


testSejuta.add('Linear Search', function () {
    linearSearch(searchRandomSejuta, sejuta);
})
    .add('Binary Search', function () {
        binarySearch(searchRandomSejuta, sejuta);
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