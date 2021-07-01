let name = 'jahed';

function  showMessage(){
    let message = 'my name is ' + name;
    console.log(message)
}
showMessage();

function changeMessage(){
let name = 'Hossain';
 let message = "my name is " + name;
 console.log(message);
}
changeMessage();
console.log(name) ; // jahed

// Default values

let age;
function defalutValue(age,text ='Hello'){
    console.log({age,text})
    if(age === undefined){
        age = 20;
    console.log(age);
}
}

defalutValue();

function checkAge(age){
    if(age >= 18){ 
        console.log('he is adult ')
    }else { console.log('he is not adult ')
}
}

checkAge(21)