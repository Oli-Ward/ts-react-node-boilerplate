import { createApp } from "./app";
import "dotenv/config";

const app = createApp();

app.listen(process.env.API_PORT, () => {
    console.log("Server running");
});