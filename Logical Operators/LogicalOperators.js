if(1 || 0){
    console.log('truthy')
}
let hours ;

( hours=10,hours == 9 || hours <=11 )?console.log('it is ok'):console.log('it is not ok');

let isWeekend = true;

const findTheTruthyValue=(hours<9 || hours > 18 || isWeekend)?'it is oke':'it is not ok';
console.log({findTheTruthyValue})

let first = 21;
let second =22;

const andOperator = (first <25 && second>first)?'it is and operator':'the logic is not full file';
console.log({andOperator})
const conditonwithAnd = (first >second)&&'this is fullfile';

console.log({conditonwithAnd});

const passTheFalse =(conditonwithAnd != true)&&'it is fale';
console.log({passTheFalse})