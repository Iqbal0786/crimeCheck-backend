const express= require("express");
const router=express.Router();
const User= require("../models/user.model")

router.get("",async(req,res)=>{
     try {
         const users= await  User.find().lean().exec();
         return res.status(200).send(users)
        
     } catch (error) {
        return res.status(500).send(error.message)
     }
})

router.post("/register",async(req,res)=>{
    try {
        let user = await User.findOne({ username: req.body.username }).lean().exec();

        if (user)
            return res.status(400).send({ message: "Please try another email" });

        user = await User.create(req.body);
        return res.status(201).send(user)
       
    } catch (error) {
       return res.status(500).send(error.message)
    }
})
router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user){
            return res
                .status(400)
                .send({ message: "Please try another email or password" });
        }
        else{
            return res.status(200).send(user)
        }
    } catch (error) {
       return res.status(500).send(error.message)
    }
})







module.exports=router;