// the unary operator
let x = 1;
x = -x;
console.log(x);

x = 3;
let y = 2;
console.log(x - y);

// the math  will be addition Subtraction Multiplication Reminder Exponentiation
// Reminder %
console.log(5 % 2);
// Exponentiation
console.log("2 multiplied 4 times ", 2 ** 4);

// sting concatenation with binary
let myName = "jahed " + " hossen";
console.log(myName);
console.log("also '1' + 2 = ", "1" + 2);
console.log("strange things in concat is ", "1" + 2 + 2);
// Numeric conversion , unary +
console.log(+x);
let z = -2;
console.log(+z);

console.log(+true);
console.log(+"");

let orange = "2";
let apple = "4";
console.log(orange + apple);

//  = is call assignment
let p = 2 * 2 + 1;
console.log(x);
let c = 4 - (a = x - y);
console.log(c);
let j, k, l;
j = k = l = 2 + 2;
console.log("k =", k);

// modify in place
let n = 2;
n += 5;
n *= 2 + 2;
console.log("value of n =", n);
// increment and decrement

let jahed = 2;
jahed++;
console.log("increment", jahed);
jahed--;
console.log("decrement", jahed);
console.log(++jahed);
//increment and decrement can be put before and after of the value;

// Bitwise operators
// Bitwise operators
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>>

// comma operators
let o = (1 + 2, 4 + 3);
console.log(o);
// task
let taskA = 1;
let taskB = 1;
console.log("++taskA", ++taskA);
console.log("taskB++", taskB++);
// task 2
let taska = 2;
let taskx = 1 + (taska *= 2);
console.log("taska", taska);
console.log("taskx", taskx);

// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// 7 / 0 = Infinity
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)
