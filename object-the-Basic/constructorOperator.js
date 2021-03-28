function User(name){
    this.name = name;
    this.admin = false
}

let user = new User('Jack')

console.log(user.name);
console.log(user.admin);

let user1 = {
    name: 'jahed',
    isAdmin: true
}

console.log(user1.name)

let user2 = new function(){
    this.name = "John";
    this.isAdmin = false;
}

function BigUser(){
    this.name = "John";
    return {name: "jahedBig"}
}
console.log(new BigUser().name)

function smallUser(){
    this.name = "smallUserJohn";
    return;
}

console.log(new smallUser().name);

// Methods in constructor 

function User(name){
    this.name = name;
    this.sayHi = function(){
    result = "my name is " + this.name
return result;    
};
}

let john = new User("John")

console.log(john.sayHi())