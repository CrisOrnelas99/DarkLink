import rateLimit from "express-rate-limit";
import { ENV } from "../lib/env.js";

const windowMs = Number(ENV.RATE_LIMIT_WINDOW_MS ?? 15 * 60 * 1000);
const max = Number(ENV.RATE_LIMIT_MAX ?? 100);

export const apiRateLimiter = rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "Too many requests, please try again later." }
});
