let arr = [10, 24, 18, 34, 8, 14]
let arr2 = arr.map((value, index, data)=>{
    return value*index;
})

console.log(arr2);