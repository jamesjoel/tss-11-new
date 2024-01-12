var data1 = ["red", "green", "blue"];
// var data2 = data1;

var [...data2] = data1;

data1[0] = "yellow";

console.log(data1);
console.log(data2);