const {Schema,model}=require("mongoose")
const bcryptjs = require("bcryptjs")

let teacherSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

teacherSchema.pre("save", async function(){
    let salt = await bcryptjs.genSalt(10)
    this.password=await bcryptjs.hash(this.password,salt)
})

module.exports=new model("teacher", teacherSchema)