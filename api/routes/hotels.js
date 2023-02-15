import express from "express"
import { createHotel, deleteHotel, getAllHotel, getHotel, updatedHotel } from "../controller/hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//create
router.post("/", createHotel);
//update

router.put("/:id", updatedHotel);
//delete
router.delete("/:id", deleteHotel)
//get

router.get("/:id", getHotel)
//get all
router.get("/", getAllHotel)

export default router;
router