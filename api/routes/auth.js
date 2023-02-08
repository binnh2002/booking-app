import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("helll router")
})

router.get("/register", (req, res) => {
    res.send("register")
})

router.get("/login", (req, res) => {
    res.send("login")
})
export default router