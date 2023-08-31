const nodemailer=require("nodemailer")

let transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"yashsrivastava613@gmail.com",
        pass:"nsaqzxvpfmvwrzfi"
    }
})

let invitationMail=async(email,name)=>{
    let mailOptions={
        from:"yashsrivastava613@gmail.com",
        to:email,
        subject:"Invitation mail",
        html:`<h1>You have been successfully registered Mr ${name}</h1>`
    }
    transporter.sendMail(mailOptions, ()=>{"Mail sent successfully"})
}

module.exports={invitationMail}