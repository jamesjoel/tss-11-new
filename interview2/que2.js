let a = "Lorem, ipsum dolor sit amet consectetur adipisicing rohit elit. At recusandae eligendi rohit ipsam possimus inventore consectetur quidem explicabo ducimus magni odio dignissimos, rohit totam aut quam saepe, reiciendis rohit iure animi minima libero?";

let arr = a.split(" ");

let arr2 = arr.map(value=> value=="rohit" ? "amar" : value);

let b = arr2.join(" ");

console.log(b);
