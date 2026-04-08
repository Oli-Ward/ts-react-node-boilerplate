import { Router } from "express"
import {
    loginUser,
    registerUser,
    validateUser,
} from "src/controllers/authController"

export const authRouter: Router = Router()

authRouter.post("/register", registerUser)

authRouter.post("/login", loginUser)

authRouter.get("/me", validateUser)
