import express from "express"
import { getUserForSidebar } from "../routControler/userroutControler.js";
import isLogin from "../middleware/isLogin.js";

const router = express.Router();

router.get('/',isLogin,getUserForSidebar)

export default router