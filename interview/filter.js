let arr = [10, 24, 18, 34, 8, 14]
let arr2 = arr.filter((value, index, data)=>{
    return value > 20;
})

console.log(arr2);