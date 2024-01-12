require("mongoose").connect("mongodb://0.0.0.0:27017/tss11").
then(()=>{
    console.log("DB CONNECTED")
}).catch((err)=>{
    console.log("DB NOT CONNECTED")
});