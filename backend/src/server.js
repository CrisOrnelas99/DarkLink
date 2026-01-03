import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();

import { ENV } from "./lib/env.js";
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { apiRateLimiter } from "./middleware/ratelimit.middleware.js";

import {connectDB} from "./lib/db.js";

const PORT = ENV.PORT || 3002;

app.use(express.json()) //req.body
app.use(cookieParser());
app.use("/api", apiRateLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
    connectDB()

})

