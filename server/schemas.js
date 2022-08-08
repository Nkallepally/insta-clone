const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    image: String,
    author:String,
    location:String,
    desc:String,
    date:{
        type:Date,
        default:new Date()
    }
})



const postModel = new mongoose.model("post",postSchema)


module.exports = postModel