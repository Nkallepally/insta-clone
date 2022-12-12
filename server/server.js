const express = require("express")
const app = express()
const mongoose = require("mongoose")
const postModel = require("./schemas")
const cors = require("cors")
require("dotenv").config()

//app.listen(3006,(err)=>{
app.listen(process.env.PORT || 3006,(err)=>{
    if(!err){
        console.log("Server started at port 3006")
    }else{
        console.log(err);
    }
});

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({extended:false}))
app.use(cors())

    //mongoose.connect("mongodb://localhost/insta",()=>{
 mongoose.connect("mongodb+srv://Navyaa:Navya29@cluster0.vv8toxm.mongodb.net/?retryWrites=true&w=majority",()=>{   
    console.log("Successfully connected to db")
},(err)=>{
    console.log(err)
})

app.get("/post",(req,res)=>{
        postModel.find({}).then((postData)=>{
        res.status(200).send(postData)
         //console.log(postData)
     
    })
})
app.get("/",(req,res)=>{
    res.status(200).send("working")
})


app.post("/add",(req,res)=>{
    postModel.create(req.body).then((data)=> {
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

