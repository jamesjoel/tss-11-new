//  How do you reverse a string?

let a = "rohit sharma";
let arr = a.split("");
let arr2 = [];
for(let i = arr.length-1; i >= 0; i--)
{
    arr2.push(arr[i]);
}
let b = arr2.join("");
console.log(b);