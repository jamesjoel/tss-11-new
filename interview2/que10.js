let arr = [4, 10, 8, 3, 9, 45, 6, 25, 30];

let sum = 0;
for(let i = 0; i < arr.length; i++)
{
    sum += arr[i];
}

let ans = sum/arr.length;
console.log(ans);