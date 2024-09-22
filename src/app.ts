import express,{Application,Request,Response} from "express"
const app:Application = express()

const port:number = 4000

import * as dotenv from "dotenv"
dotenv.config()

import "./database/connection"

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello world")
})


app.listen(port,()=>{
    console.log("Running in port",port)
})