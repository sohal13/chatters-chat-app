import path from "path"
import express from "express";
import dotenv from 'dotenv'
import cookieparser from "cookie-parser"

import userRout from './rout/user.rout.js'
import authRout from './rout/auth.router.js'
import dbConnection from "./dataBase/dbConnection.js";
import messageRout from './rout/message.route.js'

import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieparser());

app.use('/api/auth',authRout)
app.use('/api/message',messageRout)
app.use('/api/user',userRout)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(3000,()=>{
    dbConnection(),
    console.log(`Server is Running at ${PORT}`);
})