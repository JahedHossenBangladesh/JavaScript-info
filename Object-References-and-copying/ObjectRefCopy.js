let name = "jahed";
let user = name;

let userInfo = {
  name: "Jahed",
};
let userDetail = userInfo;

userDetail.name = "John";

console.log(userDetail);

let a = {};
let b = {};
let c = a == b;
console.log(c);
