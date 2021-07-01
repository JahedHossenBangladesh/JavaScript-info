
let i = 0;

// while (i < 3) {
//     console.log(i);
//     i++;
// }

do{
    console.log(`do while ${i}`);
    i++;
}while(i <4)

//for loop
// for (begin; condition; step) {
//   // ... loop body ...
// }

for (let i = 0; i <50 ; i++)
{console.log(i)}
//skipping 
i = 0;
for(;i <3;i++){
    console.log(`This is skipping part ${i}`)
}

//Continue to the next iteration

for (let index = 0; index < 10; index++) {
    
    if(index %2 == 0) continue;
    console.log(index);
    
}