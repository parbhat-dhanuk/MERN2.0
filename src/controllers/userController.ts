
import { Request,Response } from "express";
import User from "../database/models/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class AuthController{

  public static async registerUser(req:Request,res:Response):Promise<void>{
     
    
        
        const {username,email,password,role} = req.body

        if(!username || !email || !password){
            res.status(400).json({
                message:"Please provide username,email,password"
            })
            return
        }

       await User.create({
            username,
            email,
            password : bcrypt.hashSync(password,8),
            role:role
        })
        
        res.status(200).json({
            message:"User registered successfully"
        })
    
    }

    public static async loginUser(req:Request,res:Response):Promise<void>{
        const {email,password} =req.body

        if(!email || !password){
            res.status(400).json({
                message:"please provie email and password"
            })
            return
        }
       
        const [data] = await User.findAll({
            where:{
            email:email
            }
        })
     
        if(!data){
            res.status(404).json({
                message:"No user with that email"
            })
            return
        }

        //Check password now

            const isMatched = bcrypt.compareSync(password,data.password)
            if(!isMatched){
             res.status(403).json({
                message:"Invalid password"
             })
             return
            }
              
            // generate token

           const token = jwt.sign({id:data.id},"parbhat",{
                expiresIn:"20d"
            })
            res.status(200).json({
                message:"login successfull",
                data:token
            })
        
    }
}

export default AuthController