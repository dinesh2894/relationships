const express = require("express");
const app = express();
const port = 8080;

app.get("/",(req,res)=>{
    console.log("This is root!!");
    res.send("This is root!!");
});

app.listen(port,()=>{
    console.log(`Server is on port ${port}`);
});

