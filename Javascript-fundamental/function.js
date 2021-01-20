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
