let added = (a, b) => a + b ;
console.log(added(2,4))

let double = n => n*2;
console.log(double(100))
let age = 12
let welcome = (age < 10) ? () => console.log('you are fine') : () => console.log('you are not fine ');
welcome()