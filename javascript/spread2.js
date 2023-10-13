var user = {
    name : "rohit",
    age : 25,
    city : "indore",
    contact : 465784
}

var {...temp} = user;

user.name = "amar";
user.contact = "887744";

console.log(user)
console.log(temp)