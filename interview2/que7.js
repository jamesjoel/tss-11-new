// How do you find out if the two given strings are anagrams?
//bare/bear, reed/deer, calm/clam, ales/seal, toga/goat, hear/hare, aunt/tuna, paws/wasp, flow/wolf

let a = "foeiormvbndur";
let b = "oiorvbJndurem";
console.log(a.split("").sort().join("")==b.split("").sort().join("") ? "yes" : "no")
// let arr1 = a.split("");
// let arr2 = b.split("");
// arr1.sort();
// arr2.sort();
// let x = arr1.join("");
// let y = arr2.join("");

if(x == y)
{
    console.log("YES")
}
else{
    console.log("No");
}


