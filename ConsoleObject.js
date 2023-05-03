console.log("Hey Whats'up!!");
console.warn("warn")
console.info("Hey Avik!");
console.error("err")
console.assert("err" != false)
console.assert("err" == false)

console.time("ForLoop")
for (let i = 0; i < 500; i++) {
  console.log(233)
}
console.timeEnd("Forloop")

//Compairing the time taken by for and while loop to iterate
console.time("WhileLoop")
let i = 0;
while (i < 500) {
  console.log(233);
  i++;
}
console.timeEnd("Whileloop")
