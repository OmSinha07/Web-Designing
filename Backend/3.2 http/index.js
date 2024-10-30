import express from "express"
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    // console.log(req,rawHeaders);//detials of system Raweheaders goives
    res.send("<h1>Hello world</h1>");//gives hello world to the server
})
app.get("/about",(req,res)=>{
    // console.log(req,rawHeaders);//detials of system Raweheaders goives
    res.send("<h1>about</h1>");//gives hello world to the server
})
app.get("/home",(req,res)=>{
    // console.log(req,rawHeaders);//detials of system Raweheaders goives
    res.send("<h1>home</h1>");//gives hello world to the server
})
app.listen(port,()=>{
    console.log(`Server running on ${port}.`);
})