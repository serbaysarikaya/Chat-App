
import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenc from "dotenv"
import { connectDb } from "./lib/db.js";
import cookiesParser from "cookie-parser";



dotenc.config()
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use(cookiesParser())

app.use("/api/auth",authRoutes)

app.listen(PORT, () => {
  console.log("server is running on port PORT :", PORT);
  connectDb();
});

