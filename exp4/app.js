const express = require("express");
const app = express();
<<<<<<< HEAD

app.set("view engine","ejs");

app.use(express.static(__dirname+"/assets"));
app.get("/",(req, res)=>{
    res.render("home");
});

const port =process.env.PORT||3000;

app.listen(port,()=>{
    console.log("server is running with port ",port );

});
=======
// calling the constructor

app.set("view engine", "ejs"); // pug, jade, handlebar

app.get("/", (req, res)=>{
    // res.sendFile(__dirname+"/home.html");
    res.render("home");
})


app.get("/about", (req, res)=>{
    res.render("about");
})

app.get("/contact", (req, res)=>{
    res.render("contact");
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running with port ", port);
})
>>>>>>> 4d7a0369ec211716eb5aece5daf371d0784e2b03
