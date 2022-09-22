import mongoose from "mongoose";

// const database = mongoose.createConnection('mongodb://localhost:27017/employee')
// const database = mongoose.connect('mongodb://localhost:27017/EMP')
const database = mongoose.connect('mongodb+srv://simisann:sannagar@cluster0.fxx4vqs.mongodb.net/EMP')
// console.log('database',database)
export const db = {database}
