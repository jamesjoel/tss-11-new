<<<<<<< HEAD
require("mongoose").connect("mongodb://0.0.0.0:27017/tss11").
then(()=>{
    console.log("DB CONNECTED")
}).catch((err)=>{
    console.log("DB NOT CONNECTED")
});
=======
require("mongoose").connect("mongodb://0.0.0.0:27017/tss11")
.then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log("DB NOT ----- Connected", err);
})
>>>>>>> 4d7a0369ec211716eb5aece5daf371d0784e2b03
