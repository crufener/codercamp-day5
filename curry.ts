/*increment and decrement functions*/
let increment = (x => y => x + y);
let decrement = (x => y => y - x);
/*increment with first value passed in*/
let incrementByOne = increment(1);
let incrementByTen = increment(10);
let incrementByFifty = increment(50);
/*decrement with first value passed in*/
let decrementByOne = decrement(1);
let decrementByTen = decrement(10);
let decrementByFifty = decrement(50);

/**/
console.log(incrementByOne(100));
console.log(incrementByTen(100));
console.log(incrementByFifty(100));
console.log(decrementByOne(100));
console.log(decrementByTen(100));
console.log(decrementByFifty(100));
