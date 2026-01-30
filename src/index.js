import express from 'express'
import connectDB from './db/db.js'
import dotenv from'dotenv'

dotenv.config({ path: './.env' })

const app = express();

connectDB()
.then(()=>{
    app.listen(`${process.env.PORT} || 8000`)
    console.log(`server running on port: ${process.env.PORT}`)
})
.catch((error)=>{
    console.log("server error", error)
})