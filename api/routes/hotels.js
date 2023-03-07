import express from "express"
import { createHotel, deleteHotel, getAllHotel, getHotel, updatedHotel } from "../controller/hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);
//update

router.put("/:id", verifyAdmin, updatedHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel)
//get

router.get("/:id", getHotel)
//get all
router.get("/", getAllHotel)

export default router;
router