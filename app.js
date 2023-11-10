const express = require("express");
const path = require("path");
const app = express();


const publicFolderPath = path.join(__dirname,"/public")
app.use(express.static(publicFolderPath))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.listen(3000, ()=> console.log("Servidor arrancado en el puerto 3000"))