let a = "i love my india"; // I love my IndIa

let arr = a.split("");
let arr2 = arr.map(value=>value=="i" ? "I" : value);
let b = arr2.join("");

console.log(b);