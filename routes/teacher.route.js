const express=require("express")
const{addTeacher, loginTeacher, getTeacher}=require("../controllers/teacher.controller")

let router=express.Router()

router.post("/addteacher", addTeacher)
router.post("/loginteacher", loginTeacher)
router.get("/getteacher", getTeacher)

module.exports=router