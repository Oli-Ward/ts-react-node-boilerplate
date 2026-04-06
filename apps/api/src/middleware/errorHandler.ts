import { NextFunction, Request, Response } from "express"

import logger from "../config/logger"

interface HttpError extends Error {
    status?: number
}

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    logger.error(err.stack)
    const status = (err as HttpError).status ?? 500
    res.status(status).json({
        error: (err as HttpError).message ?? "Internal Server Error",
    })
}

export const notFoundHandler = (
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    res.status(404).json({ error: "Not Found" })
}
