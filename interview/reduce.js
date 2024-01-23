let arr = [10, 24, 18, 34, 8, 14]
let x = arr.reduce((acu, value, index, data)=>{
    return acu+value;  
})

console.log(x);
