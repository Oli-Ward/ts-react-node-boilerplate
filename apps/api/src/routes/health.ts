import { Request, Response, Router } from "express"

export const healthRouter: Router = Router()

healthRouter.get("/health", (_req: Request, res: Response) => {
    res.json({ message: "Hello World" })
})
