const mongoose= require("mongoose")

const noticeBoardSchema= new mongoose.Schema({
     noticeText:{type:String,required:true},
     user_id:{type:mongoose.Schema.Types.ObjectId , ref:"user" ,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("noticeBoard",noticeBoardSchema);