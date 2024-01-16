require("mongoose").connect("mongodb://0.0.0.0:27017/tss11").then(()=>{
console.log("mongo DB connection successful")})
.catch((err)=>{console.log("mongo DB not connect",err)
});
