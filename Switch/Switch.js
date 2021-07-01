// syntex know

let a = 5;

switch(a){
    case 3 : console.log('it is 3');
    break;
    case 5 : console.log('it is 5');
    break;
    default: console.log('i dont know')
}

// syntex  
let b = '1';
let c = 0;

switch(+b) {
case c + 1 : console.log('it is all right')
break;
case 3: console.log('it is 3');
break;
default: console.log('i dont know')
}

// Grouping

switch(a){
    case 1: console.log('it is 1');
    break;
    case 4:
    case 5: console.log('it is 5'); console.log('it is 4');
    break;
    default: console.log('i dont know')
}
// type matter
const typeNumber = 2;

switch(typeNumber) {
    case 0: 
    case 1: console.log('it is 0 or one ');
    break;
    case 2: console.log('it is 2');
    break;
    case 3 : console.log('it is 3');
    break;
    default: console.log('i dont know')
}