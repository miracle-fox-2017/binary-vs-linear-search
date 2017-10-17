var Benchmark = require('benchmark')
var suite = new Benchmark.Suite;

let arr = []

for(let i = 0; i <= 2000; i++) {
  arr.push(i)
}

function binarySearch (search, arr)
{
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (true)
  {
    debugger;
    if (search === arr[mid])
    {
      return mid;
    }
    else if (search < arr[mid])
    {
      end = mid - 1;
    }
    else if (search > arr)
    {
      start = mid + 1;
    }
    else
    {
      return -1;
    }
    mid = Math.floor((start + end) / 2);

  }
  return 0;
}

function linearSearch (target,arr)
{
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === target)
    {
      return i;
    }
  }
  return -1;
}
// binarySearch(8, [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ])

suite.add('binarySearch', function() {
  binarySearch(300,arr)
})
.add('linearSearch', function() {
  linearSearch(300,arr)
})
.on('cycle', function(event)
{
  console.log(event.target.toString());
})
.on('complete', function() {
  console.log("fastest is " + this.filter('fastest').map('name'));
})

.run({'async' : true})
