<<<<<<< HEAD
var obj ={ a:"red",
           b:"blue",
           c:"pink",
            user:{
                name:"rohit",
                age:25,
                hobby:"",
            } }

 console.log(obj.user.name);
=======
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
>>>>>>> 4d7a0369ec211716eb5aece5daf371d0784e2b03
