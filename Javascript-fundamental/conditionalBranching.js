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
