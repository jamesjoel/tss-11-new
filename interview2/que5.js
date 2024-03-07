// How do you calculate the number of numerical digits in a string?
let a = "4d1f4g12e r7 1dfg 4ry7r g1er5t4";
let arr = a.split(""); 
let counter = 0;
let sum = 0;
for(let i = 0; i < arr.length; i++)
{
    if(! isNaN(arr[i]) && arr[i] != " ") // is not a number
    {
        let x = parseInt(arr[i]);
        sum += x;
    }
}
console.log(sum);
