import express from "express"
import { createRoom, deleteRoom, getAllRoom, getRoom, updatedRoom } from "../controller/room.js";

import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);
//update

router.put("/:id", verifyAdmin, updatedRoom);
//delete
router.delete("/:hotelid/:id", verifyAdmin, deleteRoom)
//get

// router.get("/:id", getRoom)
//get all
router.get("/", getAllRoom)

export default router