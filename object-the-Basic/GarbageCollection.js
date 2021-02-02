let user = {
  name: "mehedi",
};
user = null;

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman,
  };
}
let family = marry(
  {
    name: "john",
  },
  {
    name: "jugoni",
  }
);
console.log(family);

delete family.father;
console.log(family);
