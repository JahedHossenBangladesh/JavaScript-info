let user = {
    name: 'John',
    age:30
}

user.sayHi = function (){
    console.log('hello');
}
user.sayHi();

let user = {
    name:'John',
    age:30,
    sayHi(){
        console.log(this.name)
    }
}

