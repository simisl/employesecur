import mongoose from "mongoose";

const user = mongoose.model(
  "user",
  new mongoose.Schema({
    empid:{type:String,required:true,unique:true},
    name: String,
    file: String,
    gender: String,
    organzn:String,
    designation: String,
    dob: String,
    time: String,
    Age: Number,
    created: Date
  })
)

export const User = { user}
