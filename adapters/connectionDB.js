const mongoose=require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.URL).then(()=>{
    console.log("Connection Established")
}).catch((err)=>{
    console.log(err)
})