// How do you calculate the number of vowels and consonants in a string?

let a = "i love my indore, my name is rohit sharma";
let arr = a.split("");
let x = 0;
let y = 0;

let vowels = ["a", "e", "i", "o", "u"];
for(let i = 0; i < arr.length; i++)
{
    if(vowels.indexOf(arr[i]))
    {
        x++;
    }
    else if(arr[i] != " "){
        y++;
    }
}

console.log("V ", x);
console.log("C ", y);