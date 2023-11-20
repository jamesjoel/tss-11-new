     
     require("mongoose").connect("mongodb://0.0.0.0:27017/project").then(()=>{
         console.log("mongo db connection successful")
      }).catch((err)=>{
         console.log("mongodb not connected", err)
      })