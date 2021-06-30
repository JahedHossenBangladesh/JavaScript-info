// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

let names;


console.log(names ?? 'jahed');

//  ?? only find the defined value
let height = 0;

console.log(height || 100)
console.log(height ?? 100)

// || returns the first truthy value.
// ?? returns the first defined value.

// precedence : null is also undefine
let x = null;
let y = null;

let z = (x ?? 100)*(y?? 40);

console.log({z});

 x = (1 && 2) ?? 3;

 console.log({x});







