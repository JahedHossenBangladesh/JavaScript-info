let sum = (a, b) => a + b;
let add = sum(3, 4);
console.log(add);

let dauble = (n) => n * 2;
console.log(dauble(6));

let sayHi = () => "Hellow";
console.log(sayHi());
let age = 12;
let welcome = age < 19 ? () => "Hello young" : () => "it is default";
console.log(welcome());

let suum = (a, b) => {
  let result = a + b;
  return result;
};
console.log(suum(4, 6));
