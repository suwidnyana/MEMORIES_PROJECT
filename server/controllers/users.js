import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import UserModel from '../models/user.js'

const secret = 'test';

export const signin = async (request, respond) => {
    const {email, password} = request.body;
  
    try {
        const oldUser = await UserModel.findOne({email});
        if(!oldUser) return respond.status(404).json({message: "User doesn't exist"})
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if(!isPasswordCorrect) return respond.status(400).json({message: "Invalid Credentials"})
        const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret,{ expiresIn: "1h"});
        respond.status(200).json({result: oldUser, token})
    } catch (error) {
        respond.status(500).json({message: "Something went wrong"});
    }
}


export const signup = async (request, respond) => {
    const {email, password, firstName, lastName} = request.body
   
    try {
        const oldUser = await UserModel.findOne({ email });

        if (oldUser) return respond.status(400).json({ message: "User already exists" });
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
        const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
    
        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
    
        respond.status(201).json({ result, token });
    } catch (error) {
        respond.status(500).json({ message: "Something went wrong" });
    
        console.log(error);
    }
}