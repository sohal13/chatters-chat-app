import express from "express"
import { LogOut, Login, SignUp } from "../routControler/authroutControler.js";

const router = express.Router();

router.get('/login',Login)

router.post('/signup',SignUp)

router.post('/logout',LogOut)


export default router