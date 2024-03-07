let arr = ["gd", "sdfg", "tert", "sdfgsdfgsdg", "rtwet", "tertegvd", "sdfgsdgsdfsdfgsdg", "sdfg"];

let x = arr.reduce((a, b)=> a.length > b.length ? a : b);

console.log(x);