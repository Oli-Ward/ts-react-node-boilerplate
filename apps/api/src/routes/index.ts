import { Request, Response, Router } from "express"

const router: Router = Router()

router.get("/health", (_req: Request, res: Response) => {
    res.json({ message: "Hello World" })
})

export default router
