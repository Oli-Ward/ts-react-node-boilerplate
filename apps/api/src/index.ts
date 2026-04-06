import "dotenv/config"
import "./config/db"

import { createApp } from "./app"
import logger from "./config/logger"

const app = createApp()

app.listen(process.env.API_PORT, () => {
    logger.info(`Server running on port ${process.env.API_PORT}`)
})
