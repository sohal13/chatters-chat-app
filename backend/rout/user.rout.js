import express from "express"
import { currentChatters, getUserForSidebar, getUsersBySearch } from "../routControler/userroutControler.js";
import isLogin from "../middleware/isLogin.js";

const router = express.Router();

router.get('/',isLogin,getUserForSidebar)

router.get('/search',isLogin,getUsersBySearch)

router.get('/currentChatters',isLogin,currentChatters)

export default router