const fruit = ["apple","Banana","orange"];
const addLemon = fruit.push("lemon");
const deleteLast = fruit.pop()
const deleteFirst = fruit.shift();
const addFirst = fruit.unshift("Mango")
console.log(fruit);

for(let i = 0;i <fruit.length;i++){
    console.log(fruit[i])
}