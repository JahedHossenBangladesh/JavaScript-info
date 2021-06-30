//Boolean is the result 
console.log(2>1);

// String comparison 
console.log('Z' > 'A');

// comparison of different types
console.log('2' > 1);
console.log(true == 1);
console.log(false == 0);
let b = '0';
console.log(Boolean(b))
let a =0;
console.log(Boolean(a));
console.log(0 == false);//true
console.log('' == false);// true
console.log(0 === false);//false
console.log(null == undefined) // true
console.log(null === undefined) //false

//null vs 0
console.log(null == 0) //false
console.log(null > 0) // false
console.log(null >= 0) // true

// undefined vs 0
console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)

