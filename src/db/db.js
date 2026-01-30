import mongoose from "mongoose"
import {DB_NAME} from "../constant.js"

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`MongoDB connected ${connection.connection.host}`)
        console.log("MongoDB successful")
    } catch (error) {
        console.log("MongoDB connection failed", error)
    }
}

export default connectDB;