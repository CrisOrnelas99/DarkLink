import rateLimit from "express-rate-limit";
import { ENV } from "../lib/env.js";

const parseEnvNumber = (value, defaultValue) => {
      const parsed = Number(value);
      return isNaN(parsed) || parsed <= 0 ? defaultValue : parsed;
    };

const windowMs = parseEnvNumber(ENV.RATE_LIMIT_WINDOW_MS, 15 * 60 * 1000);
const max = parseEnvNumber(ENV.RATE_LIMIT_MAX, 100);

export const apiRateLimiter = rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "Too many requests, please try again later." }
});
