import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app= express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB',{
    useNewUrlParser:true
},()=>{
  console.log("DB connected")
});
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    age:String

})
const User = new mongoose.model("User",userSchema)
// Routes
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
        if(password==user.password){
            res.send({message:"Login successfully",user:user})
            }else{
                res.send({message:"password did not match"})
            }
        }else{
            res.send({message:"User not register"})
        }
    })
    
});
app.post("/register",(req,res)=>{
    const {name ,email,password} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already register"})
        }else{
            const user = new User({
                name,
                email,
                password,
            })
            user.save( err =>{
                if(err){
                    res.send(err)
                } else{
                    res.send({message:"Successfull Registered.Please login now."})
                }
        })
    }
  
   })
})
app.listen(9002,()=>{
    console.log("Be started at port 9002")
})