const express = require("express");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// ✅ middleware FIRST
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// ✅ then routes
app.use("/api/auth", authRouter);

// ✅ export properly
module.exports = app;
