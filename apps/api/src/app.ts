import express from "express";
import cors from "cors";

export const createApp = (): express.Application => {
    const app: express.Application = express();
    app.use(express.json());
    app.use(cors());
    return app;
};