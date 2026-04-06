import express from "express";
import cors from "cors";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
import morgan from "morgan";

export const createApp = (): express.Application => {
    const app: express.Application = express();
    app.use(express.json());
    app.use(cors());
    app.use(morgan("dev"));
    // register routes first
    app.use(notFoundHandler);
    app.use(errorHandler);
    return app;
};