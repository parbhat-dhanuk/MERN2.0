import express,{Application,Request,Response} from "express"
const app:Application = express()

const port:number = 5000

import * as dotenv from "dotenv"
dotenv.config()

import "./database/connection"

import userRoute from "./routes/userRoute"

app.use(express.json())

app.use("",userRoute)


app.listen(port,()=>{
    console.log("Running in port",port)
})