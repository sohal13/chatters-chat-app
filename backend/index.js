import express from "express";
import dotenv from 'dotenv'
import cookieparser from "cookie-parser"

import userRout from './rout/user.rout.js'
import authRout from './rout/auth.router.js'
import dbConnection from "./dataBase/dbConnection.js";
import messageRout from './rout/message.route.js'

import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 3000

dotenv.config();

app.use(express.json());
app.use(cookieparser());

app.get("/",(req,res)=>{
    res.send("hiiiii")
})

app.use('/api/auth',authRout)
app.use('/api/message',messageRout)
app.use('/api/user',userRout)



server.listen(3000,()=>{
    dbConnection(),
    console.log(`Server is Running at ${PORT}`);
})