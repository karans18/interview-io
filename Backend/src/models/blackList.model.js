const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

const blacklistTokenModel = mongoose.model(
  "tokenBlacklist",
  blacklistTokenSchema,
);

module.exports = blacklistTokenModel;
