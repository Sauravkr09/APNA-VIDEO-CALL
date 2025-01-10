import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";
import HttpStatus from 'http-status';


const router = Router();

router.route("/login").post(login)
router.route("/register").post(register)
router.route("/add_to_activity").post(addToHistory)
router.route("/get_all_activity").get(getUserHistory)

export default router;


//mongodb+srv://souravkr9012:souravkr9012@cluster0.pngzb.mongodb.net/