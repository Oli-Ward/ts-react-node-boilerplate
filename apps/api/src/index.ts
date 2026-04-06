import { createApp } from "./app";
import "dotenv/config";
import "./config/db";

const app = createApp();

app.listen(process.env.API_PORT, () => {
    console.log(`Server running on port ${process.env.API_PORT}`);
});