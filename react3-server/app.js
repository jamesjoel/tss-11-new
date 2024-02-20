const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

mongoose.connect("mongodb://0.0.0.0:27017/tss11")

const EmpSchema = mongoose.Schema({
    name : String,
    salary : Number
})

const EmpModal = mongoose.model("employee", EmpSchema);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.get("/api/emp", async(req, res)=>{
    let result = await EmpModal.find();
    res.send({ result : result });
})
app.get("/api/emp/:id", async(req, res)=>{
    let result = await EmpModal.find({ _id : req.params.id });
    res.send({ result : result[0] });
})
app.post("/api/emp", async(req, res)=>{
    await EmpModal.create(req.body);
    res.send({ success : true  });
})
app.delete("/api/emp/:id", async(req, res)=>{
    await EmpModal.deleteMany({ _id : req.params.id });
    res.send({ success : true  });
})
app.put("/api/emp/:id", async(req, res)=>{
    await EmpModal.updateMany({_id : req.params.id}, req.body);
    res.send({ success : true });
})






const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})