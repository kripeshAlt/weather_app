const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");


// path directory
const public_path = path.join(__dirname,"../public");

const template_path = path.join(__dirname,"../templates/views");

const partials_path = path.join(__dirname,"../templates/partials");

// use static path
app.use(express.static(public_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
    // res.send("This is about page.");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
    // res.send("This is contact page.");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
    // res.send("This is weather page.");
})
app.get("/home",(req,res)=>{
    res.render("home");
    // res.send("This is home page.");
})
app.get("/index",(req,res)=>{
    res.render("index");
    // res.send("This is home page.");
})

app.get("*",(req,res)=>{
    res.send("404 error")
})


app.listen(port,()=>{
    console.log(`listening to rhe port ${port}`);
    
})










