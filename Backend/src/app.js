const express = require("express");
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");

const app = express();

// ✅ middleware FIRST
app.use(express.json());
app.use(cookieParser());

// ✅ then routes
app.use("/api/auth", authRouter);

// ✅ export properly
module.exports = app;
