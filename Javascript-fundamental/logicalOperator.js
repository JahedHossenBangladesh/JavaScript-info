// || (or) &&(and) !(not)
// || ternary operator
let money = 1000;
let checkTheMoney =
  money < 500 || money < 900
    ? "Money is geter then 900"
    : money > 1000 || money < 1100
    ? "Money is 1000"
    : "Nothing is done";
console.log(checkTheMoney);

let recheck =
  money < 900 && money == 1000
    ? "the two condition is fill up"
    : money < 1100 && money == 1000
    ? "the 1000 condition is fillup"
    : money < 1200 && money < 1100
    ? "less then 1200"
    : "";
console.log(recheck);

let notOperator =
  money != 900 ? "this is not equal to 900" : money == 1000 ? "equal 1000" : "";
console.log(notOperator);

let taskOne =
  money >= 1000 && money <= 1200 ? "it is between 1000 to 1200" : "";
let taskTwo =
  !(money >= 1000) && money <= 1200
    ? "money is not morethen 1000 and not less 1200"
    : "Money is equal to 1000";
console.log(taskOne);
console.log(taskTwo);
