import express from "express"
import { deleteUser, getAllUser, getUser, updatedUser } from "../controller/user.js";
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete adll account")
// })
//update
router.put("/update/:id", verifyUser, updatedUser)
// router.put("/checkuser/:id", verifyUser, updatedUser);
//delete
router.delete("/delete/:id", verifyUser, deleteUser)

//get all
router.get("/getAllUser", verifyAdmin, getAllUser)
//get
router.get("/:id", verifyUser, getUser)

export default router;