// var obj = { a : "red", b : "blue", c : "green", x : 100, y : true, z : 51.42};
// console.log(obj.x+obj.z);

var obj = {
    a : "red",
    b : "yellow",
    c : "pink",
    user : {
        name : "rohit",
        age : 25,
        hobby : {
            x : "cricket",
            y : "football",
            more : {
                x : "indore",
                y : "mumbai"
            }
        }
    }
}
console.log(obj.user.name);
console.log(obj.user.hobby.x);
console.log(obj.user.hobby.more.x);
