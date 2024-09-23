import User from "../database/models/User"
import bcrypt from "bcrypt"

const adminSeeder = async():Promise<void> =>{
const [data] = await User.findAll({
    where:{
        email:"p2admin@gmail.com",
    }
 })
  if(!data){       //mathi [data] nagareko vaye data.length>0 garnu parthoe but destructure garpaxi sidaii data lekna payo
  await User.create({
    email:"p2admin@gmail.com",
    password:bcrypt.hashSync("p2password",8), //8 is salt value i.e kati ko strength the hash password
    username:"p2admin",
    role:"admin"
  })
  console.log("admin credentials seeds successfully")
  }else{
    console.log("admin credentials already seeded")
  }
}

export default adminSeeder
