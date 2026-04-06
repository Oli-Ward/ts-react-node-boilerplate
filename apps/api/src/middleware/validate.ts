import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validate = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.safeParse(req.body);
        if (error) {
            return res.status(400).json({ errors: error.issues.map((issue) => issue.message) });
        }
        next();
    };
};