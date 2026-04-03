const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../models/blackList.model");

function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  const isTokenBlackListed = tokenBlacklistModel.findOne({ token });
  if (isTokenBlackListed) {
    return res.status(401).json({ message: "Token is invalid" });
  } 
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token not valid" });
  }
}
module.exports = {authUser};
