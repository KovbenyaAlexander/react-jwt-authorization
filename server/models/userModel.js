const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: String, default: false },
  activationLink: { type: String },
});

module.exports = model("User", UserSchema);
