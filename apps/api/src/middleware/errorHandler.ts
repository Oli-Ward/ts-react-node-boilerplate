import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    const status = (err as any).status ?? 500;
    res.status(status).json({ error: (err as any).message ?? "Internal Server Error" });
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: "Not Found" });
};