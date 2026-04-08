import { Router } from "express"

import { authRouter } from "./auth"
import { healthRouter } from "./health"

export const router: Router = Router()

router.use("/auth", authRouter)
router.use("/health", healthRouter)
