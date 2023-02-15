import express from "express"
import { deleteUser, getAllUser, getUser, updatedUser } from "../controller/user.js";
import { createError } from "../utils/error.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in")
})
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account")
})
//update



router.put("/checkauthentication/:id", updatedUser);
//delete
router.delete("/checkauthentication/:id", deleteUser)
//get

router.get("/checkauthentication/:id", getUser)
//get all
router.get("/", getAllUser)

export default router;