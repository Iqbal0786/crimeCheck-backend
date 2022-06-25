const express= require("express");
const router=express.Router();
const NoticeBoard= require("../models/noticeBoard.model")

router.get("",async(req,res)=>{
     try {
         const notices= await  NoticeBoard.find().lean().exec();
         return res.status(200).send(notices)
        
     } catch (error) {
        return res.status(500).send(error.message)
     }
})

router.post("",async(req,res)=>{
    try {
        const notice= await NoticeBoard.create(req.body);
        return res.status(201).send(notice)
       
    } catch (error) {
       return res.status(500).send(error.message)
    }
})








module.exports=router;