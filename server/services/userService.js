const UserModel = require("../models/userModel");
const bcrypt = reqire("bcrypt");
const uuid = require("uuid");
const mailServise = require("./mailService");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error("User already exist");
    }
    const activationLink = uuid.v4();
    const hachPassword = await bcrypt.hash(password, 2);
    const user = await UserModel.create({ email, password: hachPassword });
    await mailServise.sendActivationMail(email, activationLink);
  }
}

module.exports = new UserService();
