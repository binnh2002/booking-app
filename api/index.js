import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from 'cookie-parser';


import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"


const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongo')
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('disconnected')
})

mongoose.connection.on('connected', () => {
    console.log('connected')
})

app.get("/", (req, res) => {
    res.send("hello");
})

app.use(express.json());
app.use(cookieParser());

// middleware

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
// error handler

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500

    const errorMessage = err.message || "Something wrong!!"

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
});


app.listen(8888, () => {
    connect()
    console.log('connected to backend!')
})

