let i = 0;
while (i < 4) {
  console.log("for the while", i);
  i++;
}
for (let i = 0; i < 4; i++) {
  console.log("for the for", i);
}
do {
  console.log("do while", i);
  i++;
} while (i < 3);
let v = 0;
for (; v < 9; v++) {
  console.log("for loop skipping part", v);
}
for (let p = 0; p < 10; p++) {
  if (p % 2 == 0) continue;
  console.log("continue to the next iteration", p);
  // continue help decrease nesting {}
  //  if(p%2 ==0){
  //   console.log(p);
  // }
}
