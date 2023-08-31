const express=require("express")
require('dotenv').config()
require("./adapters/connectionDB")
const teacherRoutes=require("./routes/teacher.route")

let app=express()

app.use(express.json())

app.use("/api/auth", teacherRoutes)

app.use("*", (req,res,next)=>{
    res.status(404).json({error:true, message:"Page not found"})
})

app.use((err,req,res,next)=>{
    res.status(400).json({error:true, message:"an error occured", data:null})
})

let PORT=process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})