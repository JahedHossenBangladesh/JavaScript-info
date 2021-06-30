// Boolean conversions
if(0){
    // 0 is falsy
}
if(1){
    // 1 is truthy
}
let year = 2015;
let cond =(year == 2015);

if (cond){
}

// conditional operators ?
let age;
let ages =(age=28, age > 18) ? 'yes':'No';
console.log(ages)

let message =(age < 3)?'Hi,baby':(age<18)?'Hello':(age<100)?'Hello young':'What is your age';
console.log(message)

const company = 'Js';
(company =='Js')?console.log('Js'):console.log('you are wrong');
