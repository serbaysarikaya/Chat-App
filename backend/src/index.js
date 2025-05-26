
import express from "express";
import dotenc from "dotenv"
import cookiesParser from "cookie-parser";

import { connectDb } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"


dotenc.config()
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use(cookiesParser())

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

app.listen(PORT, () => {
  console.log("server is running on port PORT :", PORT);
  connectDb();
});

