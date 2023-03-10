import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token)
    if (!token) return next(createError(401, "you are not authenticated!"))

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(402, "token is not valid"))
        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        // if (req.user.id === req.params.id || req.user.isAdmin) {
        //     next()
        // } else {
        //     return next(createError(403, "you are not authorized"))
        // }
        if (!(req.user.id === req.params.id || req.user.isAdmin)) {
            next(createError(403, "you are not authoricated"))
        }
        next()
    })
}
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, "you are not authorized"))
        }
    })
}