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
console.log(c); // false

let newUser = {
  name: "sokina",
  age: 20,
};
let clone = {};

for (key in newUser) {
  clone[key] = newUser[key];
}
clone.age = 40;
clone.name = "Banuni";
console.log(clone);
