require("dotenv").config()
const mongoose= require("mongoose")

module.exports=()=>mongoose.connect(`${process.env.DB_URL_CONNECT}`);
