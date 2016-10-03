var increment = (function (x) { return function (y) { return x + y; }; });
var decrement = (function (x) { return function (y) { return y - x; }; });
var incrementByOne = increment(1);
var incrementByTen = increment(10);
var incrementByFifty = increment(50);
var decrementByOne = decrement(1);
var decrementByTen = decrement(10);
var decrementByFifty = decrement(50);
console.log(incrementByOne(100));
console.log(incrementByTen(100));
console.log(incrementByFifty(100));
console.log(decrementByOne(100));
console.log(decrementByTen(100));
console.log(decrementByFifty(100));