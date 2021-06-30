// Terms:"unary","binary","operand"

// unary
let x =1;
// 1 is operand
x=-x;
console.log(x) // -1;
//binary 
let y=3;
console.log(x+y)

// Maths

// Adding , subtraction,multiplication,Division,Remainder,Exponentiation 
console.log(2**3);

// String concatenation with binary +
let word= "my"+"Name";
console.log(word)
let mixNumAlpha = '3' +2;
console.log(mixNumAlpha);

// Numeric conversion , unary +

 x =1;
x=+x ;
console.log(x);
 y =-1;
 y=+y;
 console.log(y)
// assingment 
let b=3;
let c = 3 - (a = b+1);
console.log({c});

a=b=c=2+2;
console.log({a,b,c})

// modify in place
a=3;
a = a +4;
a = a*2;
console.log({a})
a +=5;
console.log({a})
a *=3;
console.log({a})
a *=3 +5;
console.log({a})
a -=6;
console.log({a})
a /=2;
console.log({a})
a++
console.log({a})
b = a++;
console.log({b})
console.log({b});
b =++a;
console.log({b});
// increment/ decrement with other operator

let counter = 1;
console.log(2 * ++counter);
counter =1;
console.log(2*counter++);

// Bitwise operators;
// & | ^ ~ << >> >>>
// comma operator

a = (1+2,3+7);
console.log({a})
//usages 
// three operations in one line
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//  ...
// }

