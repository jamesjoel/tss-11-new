// 

// var total = 1;
// for(var a = 10; a >= 1; a--)
// {
//     total *= a;
// }

// console.log(total);

var total = 0;
for(var a = 100; a >= 1; a--)
{
    if(a % 2 == 0){

        total += a;
    }
}

console.log(total);