let user = {
  name: "Jahed",
  age: 30,
};
console.log(user.age);
user.isAdmin = true;
console.log(user);

let deleteUserAge = delete user.age;
console.log(user);

user = {
  name: "jahed",

  "likes birds": true,
};
console.log(user);

user["likes birds"] = false;
console.log(user);
delete user["likes birds"];
console.log(user);

let key = "likes hen";
user[key] = "yes";
console.log(user);

//  property value shorthand
function makeUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
let users = makeUser("hossen", 50);
console.log(users);
console.log("age" in users);

for (let key in users) {
  console.log(key);
  console.log(users[key]);
}
