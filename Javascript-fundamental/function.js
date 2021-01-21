function showSms() {
  let sms = " this is sms";
  console.log(sms);
}
showSms();

//  this is outer variable in function;
let nam = "jahed";

function hellow() {
  console.log("Hellow " + nam);
}
hellow();

// Parameters
function param(first, second) {
  console.log(first + " " + second);
}
param("ami", "tumi");
// default
function given(nickName, address = "chittagong") {
  console.log(nickName + " stay is " + address);
}
given("Jibon");

// alternative default parameters

function alternative(text) {
  if (text === undefined) {
    text = "empty text";
  }
  console.log(text);
}
alternative();

// return value
function sum(a, b) {
  return a + b;
}
let result1 = sum(2, 4);
console.log(result1);

// with out return function is undefine;

function checkAge(age) {
  return age > 18 ? `myage is  ${age}` : "do you have id";
}
let myAge = checkAge(17);
console.log(myAge);

function min(a, b) {
  return a < b ? a : b;
}
let heighNumber = min(12, 22);
console.log(heighNumber);
