let a = 4;
switch (a) {
  case 1:
    console.log("it is one");
    break;
  case 2:
    console.log("it is two");
    break;
  case 3:
    cosole.log("it is three");
    break;
  default:
    console.log("the result is not found");
}
a = "1";
let b = 0;
switch (+a) {
  case b + 1:
    console.log("this is new things b +1");
    break;
  default:
    console.log("this is a new one");
}
a = 3;
switch (a) {
  case 4:
    console.log("this is four");
    break;
  case 3:
  case 5:
    console.log("this is 3 and 5. this is grouping of case");
    break;
  default:
    console.log("this is default");
}
let d = 4;
switch (d) {
  case 1:
  case 2:
    console.log("this is case 1 and 2");
    break;
  case 3:
    console.log("this is 3");
    break;
  case 4:
    console.log("this is four");
    break;
  default:
    console.log("this is default");
}
