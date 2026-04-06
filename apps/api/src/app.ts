import cors from "cors"
import express from "express"
import morgan from "morgan"

import { errorHandler, notFoundHandler } from "./middleware/errorHandler"
import router from "./routes"

export const createApp = (): express.Application => {
    const app: express.Application = express()
    app.use(express.json())
    app.use(cors())
    app.use(morgan("dev"))
    // register routes first
    app.use("/api/v1", router)
    app.use(notFoundHandler)
    app.use(errorHandler)
    return app
}
