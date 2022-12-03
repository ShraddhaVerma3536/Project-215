//require does the same work as import
const express = require("express")
const app=express()
//http library is used to create HTTP server
const server=require("http").Server(app)

//req-request   res-response
app.get("/",(req,res)=>{
    //status 200 is the default ok response for all GET apis
    res.status(200).send("Hi prangan")
})
server.listen(3030)
