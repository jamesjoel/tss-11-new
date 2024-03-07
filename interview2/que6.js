// How do you find the count for the occurrence of a particular character in a string?

let a = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In consectetur repudiandae temporibus tempore magni amet, cumque pariatur, aliquam aliquid omnis vel fuga eos sit nam nulla deserunt? Maxime, recusandae ipsam.";


let arr = a.split("");
let counter = 0;

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] == " ")
    {
        counter++;
    }
}

console.log(counter)

