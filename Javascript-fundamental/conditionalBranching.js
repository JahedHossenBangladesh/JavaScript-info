let year = 2021;
if (year == 2021) {
  console.log("happy new year");
} else {
  console.log("nothing");
}

let checkYear = year > 2020 ? "this is newYear" : "this is not ";
console.log(checkYear);

let multiYearCheck =
  year < 2021
    ? "it is less then 2021"
    : year > 2020
    ? "it is greater then 2020"
    : year < 2022
    ? " it is less then 2022"
    : "it is nothing";
console.log(multiYearCheck);

// non traditional use of ?
year === 2021 ? console.log("it is 2021") : "it is not 2021";
// task
let officialNameOfJs = "ECMAScript";
if (officialNameOfJs == "ECMAScript") {
  console.log("You know the name");
} else {
  console.log("you dont know javascript");
}
// show the sign
let vlue = 22;
let valueCheck =
  vlue > 0 ? "1" : vlue < 0 ? -1 : (vlue = 0) ? 0 : "show nothing";
console.log(valueCheck);

// Rewrite if
let a = 1,
  b = 1;
let result = a + b < 4 ? "below" : "Over";
console.log(result);
// rewrite if..else
let login = "";
let loginCheck =
  login == "EMPLOYEE"
    ? "Hello"
    : login == "GM"
    ? "Hi GM"
    : login == ""
    ? "No Login"
    : "";
console.log(loginCheck);
