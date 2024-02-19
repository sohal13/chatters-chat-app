import express from "express"
import { currentChatters, getUserForSidebar } from "../routControler/userroutControler.js";
import isLogin from "../middleware/isLogin.js";

const router = express.Router();

router.get('/',isLogin,getUserForSidebar)

router.get('/currentChatters',isLogin,currentChatters)

export default router