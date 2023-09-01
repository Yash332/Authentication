const { invitationMail } = require("../helpers/mailhelper")
const Teacher=require("../model/teacher.model")
const jwt=require("jsonwebtoken")
require("dotenv").config()

let addTeacher=async (req,res,next)=>{
    try{
        let {name,email,password}=req.body

        let teacherAvailable=await Teacher.findOne({email})
        if(!teacherAvailable){
            invitationMail(email,name)
            let teacher=await Teacher.create({name,email,password})
            return res.status(201).json({error:false, message:"Student Added Successfully", data:teacher})
        }
        res.status(409).json({error:true, message:"Teacher already exists"})
    }
    catch(err){
        next()
    }
}

let loginTeacher=async (req,res,next)=>{
    try{
        let {email, password}=req.body

        let teacherAvailable=await Teacher.findOne({email})
        if(!teacherAvailable){
            return res.status(201).json({error:true, message:"Email Invalid"})
        }
        let hashedPassword=await teacherAvailable.comparePass(password)

        if(hashedPassword){
            let token=jwt.sign({Name:teacherAvailable.name, Email:teacherAvailable.email},process.env.JWT_KEY,{expiresIn:process.env.JWT_EXPIRESIN})
            return res.status(201).json({error:false, message:"login successfull", token})
        }
        else{
            return res.status(401).json({error:true, message:"Invalid Password"})
        }
    }
    catch(err){
        next()
    }
}

let getTeacher=async (req,res,next)=>{
    try{
        let teacher=await Teacher.find()
        return res.status(200).json({error:false, message:"All Teachers Fetched", data:teacher})
    }
    catch(err){
        next()
    }
}

module.exports={addTeacher, loginTeacher, getTeacher}