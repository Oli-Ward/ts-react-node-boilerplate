import { createApp } from "./app";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = createApp();
app.use(cors());
app.listen(process.env.API_PORT, () => {
    console.log("Server running");
});