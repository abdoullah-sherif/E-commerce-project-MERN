import { userModel } from "../models/userModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

interface registerParams {
    firstName : string,
    lastName : string,
    email : string,
    password : string
}

export const register = async({firstName,lastName,email,password}:registerParams)=>{

 const findUser = await userModel.findOne({email});
 if(findUser)
 {
    return {data :"the user already exists",statusCode : 400}
 }
 const hashedPassword = await bcrypt.hash(password,10);
 const registerUser = new userModel ({firstName,lastName,email, password:hashedPassword});
 await registerUser.save();

 return {data:generateJWT({firstName,lastName,email}),statusCode : 200};
}

interface loginParams {
    email:string,
    password : string
}

export const login = async({email,password}:loginParams)=>{
    const findUser = await userModel.findOne({email});
    if(!findUser)
    {
        return {data :"Wrong Email or Password",statusCode : 400}

    }
    const matchedPassword = await bcrypt.compare(password, findUser.password)
    if(matchedPassword)
    {
        
        return {data:generateJWT({email,firstName:findUser.firstName,lastName:findUser.lastName}),statusCode : 200};
    }
    return {data :"Wrong Email or Password",statusCode : 400};
}


const generateJWT =(data:any)=>{
    return jwt.sign(data,"HVZx0DyDPpSAmEVnbQ4CV8GBHNOFm9If")

}